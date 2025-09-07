"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface ExpandedCoin {
    id: string;
    name: string;
    image: string;
    volume: number;
    marketRank: number;
    marketCap: number;
    highIn24: number;
    lowIn24: number;
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
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
];
