import { columns, ExpandedCoin } from "./columns";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import useDataCoins from "@/data/useDataCoins";

export default function DemoPage() {
    const [data, setData] = useState<ExpandedCoin[]>([]);
    const getData = useDataCoins();

    useEffect(() => {
        if (getData) {
            setData(getData);
        }
    }, [getData]);

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
