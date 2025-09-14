import useCategoriesData from "@/data/useCategoriesData";
import { Card } from "./ui/card";
import useDataSum from "@/data/useDataSum";

export default function MarketHighlight() {
    const categories = useCategoriesData();
    const exchange = useDataSum();

    if (categories && exchange)
        return (
            <>
                <Card className="bg-[#1d1e21] rounded-2xl p-5 shadow-md border-[#3e3e3f]">
                    <div className="flex items-center justify-between mb-6">
                        <img
                            className="h-12 w-auto"
                            src="./img/menu.png"
                            alt=""
                        />
                        <h5 className="text-base font-bold text-white text-center">
                            Market Categories Top
                        </h5>
                        <ul className="flex flex-col gap-1 text-sm font-medium text-[#3e3e3f]">
                            <li className="text-[#fbbf24] bg-[#fbbf24]/30 p-1 rounded-sm">
                                {categories[0].name}
                            </li>
                            <li className="text-[#fbbf24] bg-[#fbbf24]/30 p-1 rounded-sm">
                                {categories[1].name}
                            </li>
                            <li className="text-[#fbbf24] bg-[#fbbf24]/30 p-1 rounded-sm">
                                {categories[2].name}
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-between">
                        <img className="h-12" src="./img/pairing.png" alt="" />
                        <h5 className="text-base font-bold text-white text-center">
                            Market Pairs
                        </h5>
                        <span className="text-lg font-semibold text-[#fbbf24]">
                            {Math.trunc(
                                exchange.reduce((sum, obj) => {
                                    return sum + obj.trade_volume_24h_btc;
                                }, 0)
                            )}
                            $
                        </span>
                    </div>
                </Card>
            </>
        );
}
