import useDataCoins from "@/data/useDataCoins";
import { useStore } from "@/store";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React from "react";

export default function TableCom(): React.JSX.Element | undefined {
    const data = useDataCoins();
    const setOpen = useStore((state) => state.setOpen);

    if (data) {
        return (
            <>
                <div className="rounded-2xl bg-[#1d1e21] p-5 border-[#3e3e3f] border-1 mt-4">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-white">
                                Market top
                            </h2>
                            <p className="text-sm text-[#fbbf24]">
                                5 best kryptos
                            </p>
                        </div>
                        <span
                            className="text-sm font-medium text-[#fbbf24] cursor-pointer hover:underline"
                            onClick={() => setOpen(true)}
                        >
                            see all+
                        </span>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow className="border-b border-[#3e3e3f]/30">
                            <TableHead className="w-[100px] text-white">
                                Image
                            </TableHead>
                            <TableHead className="text-white">Name</TableHead>
                            <TableHead className="text-white">
                                Changes
                            </TableHead>
                            <TableHead className="text-right text-white">
                                Price
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.slice(0, 5).map((coin) => (
                            <TableRow
                                key={coin.id}
                                className="border-b border-[#3e3e3f]/20 hover:bg-[#3e3e3f]/10 transition"
                            >
                                <TableCell className="font-medium">
                                    <img
                                        className="h-8 w-8"
                                        src={coin.image}
                                        alt=""
                                    />
                                </TableCell>
                                <TableCell className="text-white">
                                    {coin.name}
                                </TableCell>
                                <TableCell
                                    className={
                                        coin.price_change_percentage_24h >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }
                                >
                                    {coin.price_change_percentage_24h}%
                                </TableCell>
                                <TableCell className="text-right text-white">
                                    {coin.current_price}$
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        );
    }
}
