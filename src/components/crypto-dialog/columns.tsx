"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

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
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="flex items-center space-x-2">
                <img className="h-10" src={row.original.image} alt="" />
                <h2>{row.original.name}</h2>
            </div>
        ),
    },
    {
        accessorKey: "current_price",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Currentprice
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return <span>{row.original.current_price}$</span>;
        },
    },
    {
        accessorKey: "total_volume",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Total volume
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return <span>{row.original.total_volume}$</span>;
        },
    },
    {
        accessorKey: "market_cap_rank",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Market cap rank
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return <span>{row.original.market_cap_rank}</span>;
        },
    },
    {
        accessorKey: "market_cap",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Market cap
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return <span>{row.original.market_cap}$</span>;
        },
    },
    {
        accessorKey: "high_24h",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Highest Price
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return <span>{row.original.high_24h}$</span>;
        },
    },
    {
        accessorKey: "low_24h",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Lowest Price
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return <span>{row.original.low_24h}$</span>;
        },
    },
    {
        accessorKey: "price_change_percentage_24h",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Price change
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
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
