"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface ExpandedCoin {
    id: string;
    name: string;
    image: string;
    total_volume: number;
    market_cap_rank: number;
    market_cap: number;
    high_24h: number;
    low_24h: number;
    current_price: number;
    price_change_percentage_24h: number;
}

export const columns: ColumnDef<ExpandedCoin>[] = [
    {
        accessorKey: "name",
        header: () => "Name",
        cell: ({ row }) => (
            <div className="flex items-center space-x-2">
                <img className="h-10" src={row.original.image} alt="" />
                <h2>{row.original.name}</h2>
            </div>
        ),
    },
    {
        accessorKey: "current_price",
        header: "Current_price",
        cell: ({ row }) => {
            return <span>{row.original.current_price}$</span>;
        },
    },
    {
        accessorKey: "total_volume",
        header: "Total_volume",
        cell: ({ row }) => {
            return <span>{row.original.total_volume}$</span>;
        },
    },
    {
        accessorKey: "market_cap_rank",
        header: "Market Rank",
        cell: ({ row }) => {
            return <span>{row.original.market_cap_rank}</span>;
        },
    },
    {
        accessorKey: "market_cap",
        header: "Market Cap",
        cell: ({ row }) => {
            return <span>{row.original.market_cap}$</span>;
        },
    },
    {
        accessorKey: "high_24h",
        header: "Highest price",
        cell: ({ row }) => {
            return <span>{row.original.high_24h}$</span>;
        },
    },
    {
        accessorKey: "low_24h",
        header: "Lowest price",
        cell: ({ row }) => {
            return <span>{row.original.low_24h}$</span>;
        },
    },
    {
        accessorKey: "price_change_percentage_24h",
        header: "Price change for 24h",
        cell: ({ row }) => {
            if (row.original.price_change_percentage_24h < 0) {
                return (
                    <span className="text-red-500">
                        {row.original.price_change_percentage_24h}%
                    </span>
                );
            } else {
                return (
                    <span className="text-green-500">
                        {row.original.price_change_percentage_24h}%
                    </span>
                );
            }
        },
    },
];
