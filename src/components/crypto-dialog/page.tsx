import { columns, ExpandedCoin } from "./columns";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import useDataCoins from "@/data/useDataCoins";
import { useStore } from "@/store";

export default function DemoPage() {
    const [data, setData] = useState<ExpandedCoin[]>([]);
    const getData = useDataCoins();

    const open = useStore((state) => state.open);

    useEffect(() => {
        if (getData) {
            setData(getData);
        }
    }, [getData]);

    if (open)
        return (
            <div className="mx-auto fixed inset-0 flex items-center p-3 justify-center bg-black/50">
                <DataTable columns={columns} data={data} />
            </div>
        );
}
