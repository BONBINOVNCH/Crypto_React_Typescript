import useDataCoins from "@/data/useDataCoins";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React from "react";

export default function TableCom(): React.JSX.Element | undefined {
    const data = useDataCoins();

    if (data) {
        return (
            <>
                <div className="table_title">
                    <div className="table_title_block">
                        <h2>Market top</h2>
                        <p>5 best kryptos</p>
                    </div>
                    <span className="seeAll">see all</span>
                </div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Changes</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.slice(0, 5).map((coin) => (
                            <TableRow key={coin.id}>
                                <TableCell className="font-medium">
                                    <img src={coin.image} alt="" />
                                </TableCell>
                                <TableCell>{coin.name}</TableCell>
                                <TableCell>
                                    {coin.price_change_percentage_24h}%
                                </TableCell>
                                <TableCell className="text-right">
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
