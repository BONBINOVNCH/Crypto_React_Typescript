"use client";
import * as React from "react";

import { useStore } from "@/store";
import useDataCoinHistory from "@/hooks/useDataCoinHistory";
import { useMemo } from "react";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Combobox } from "./Combobox";
export const description = "An interactive area chart";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#fbbf24",
    },
} satisfies ChartConfig;
export function ChartAreaInteractive() {
    const coin = useStore((state) => state.coin);
    chartConfig.desktop.label = coin?.name ?? "Bitcoin";

    const history = useDataCoinHistory();

    const [timeRange, setTimeRange] = React.useState("90d");

    type Getdata = {
        date: string;
        desktop: never;
    };

    const getData: Getdata[] | undefined = useMemo(() => {
        if (history) {
            return history.prices.map((item) => ({
                date: new Date(item[0]).toISOString().split("T")[0],
                desktop: item[1],
            }));
        }
    }, [history]);

    if (history) {
        const chartData = getData;

        const filteredData = chartData!.filter((item) => {
            const date = new Date(item.date);
            const referenceDate = new Date(
                new Date().toISOString().split("T")[0]
            );

            let daysToSubtract = 90;
            if (timeRange === "30d") {
                daysToSubtract = 30;
            } else if (timeRange === "7d") {
                daysToSubtract = 7;
            }
            const startDate = new Date(referenceDate);
            startDate.setDate(startDate.getDate() - daysToSubtract);
            return date >= startDate;
        });

        return (
            <Card className="pt-0">
                <CardHeader className="flex items-end flex-wrap-reverse gap-2 space-y-0 border-b border-[#3e3e3f] py-5 sm:flex-row">
                    <div className="grid flex text-yellow-400 font-semibold">
                        <Combobox />
                        {coin?.current_price}$
                    </div>
                    <Select value={timeRange} onValueChange={setTimeRange}>
                        <SelectTrigger
                            className=" w-[160px] rounded-lg sm:ml-auto sm:flex bg-[#1d1e21] border border-[#3e3e3f] text-gray-200 focus:ring-2 focus:ring-yellow-400"
                            aria-label="Select a value"
                        >
                            <SelectValue placeholder="Last 3 months" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl bg-[#1d1e21] border border-[#3e3e3f] text-gray-200">
                            <SelectItem
                                value="90d"
                                className="rounded-lg hover:bg-[#3e3e3f]"
                            >
                                Last 3 months
                            </SelectItem>
                            <SelectItem
                                value="30d"
                                className="rounded-lg hover:bg-[#3e3e3f]"
                            >
                                Last 30 days
                            </SelectItem>
                            <SelectItem
                                value="7d"
                                className="rounded-lg hover:bg-[#3e3e3f]"
                            >
                                Last 7 days
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                    {}
                    <ChartContainer
                        config={chartConfig}
                        className="aspect-auto h-[250px] w-full"
                    >
                        <AreaChart data={filteredData}>
                            <defs>
                                <linearGradient
                                    id="fillDesktop"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-desktop)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-desktop)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="fillMobile"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-mobile)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-mobile)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} stroke="#3e3e3f" />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value) => {
                                    const date = new Date(value);
                                    return date.toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    });
                                }}
                            />
                            <ChartTooltip
                                cursor={{ stroke: "#fbbf24", strokeWidth: 1 }}
                                content={
                                    <ChartTooltipContent
                                        labelFormatter={(value) => {
                                            return new Date(
                                                value
                                            ).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            });
                                        }}
                                        indicator="dot"
                                    />
                                }
                            />

                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="url(#fillDesktop)"
                                stroke="#fbbf24"
                                stackId="a"
                            />
                            <ChartLegend content={<ChartLegendContent />} />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        );
    }
}
