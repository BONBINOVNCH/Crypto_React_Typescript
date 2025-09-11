"use client";

import * as React from "react";

import { useStore } from "@/store";
import { useEffect } from "react";

import { CSVLink } from "react-csv";

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import { DataTablePagination } from "./DataTablePagination";
import useDataCoins from "@/data/useDataCoins";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });

    const inputCoin = useStore((state) => state.inputCoin);
    const setInputCoin = useStore((state) => state.setInputCoin);
    const setOpen = useStore((state) => state.setOpen);

    useEffect(() => {
        table.getColumn("name")?.setFilterValue(inputCoin);
    }, [inputCoin]);

    const coinData = useDataCoins();

    function csvLink() {
        const headers = Object.keys(coinData![0] || {});

        return [
            headers.join(","),
            ...coinData!.map((item) =>
                headers
                    .map((header) => item[header as keyof typeof item] ?? "")
                    .join(",")
            ),
        ].join("\n");
    }

    if (coinData)
        return (
            <div className="max-h-[100vh] overflow-y-hidden">
                <div className="flex  justify-between items-center ">
                    <Input
                        placeholder="Filter crypto..."
                        value={inputCoin}
                        onChange={(event) => {
                            setInputCoin(event.target.value);
                        }}
                        className="max-w-sm"
                    />

                    <div>
                        <CSVLink data={csvLink()}>fefefef</CSVLink>
                    </div>

                    <img
                        onClick={() => setOpen(false)}
                        className="cross h-11"
                        src=".\img\cross.png"
                        alt=""
                    />
                </div>

                <div className="overflow-hidden rounded-md border max-h-[80vh] overflow-y-auto rounded-md bg-white p-4">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column
                                                              .columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={
                                            row.getIsSelected() && "selected"
                                        }
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                <DataTablePagination table={table} />
            </div>
        );
}
