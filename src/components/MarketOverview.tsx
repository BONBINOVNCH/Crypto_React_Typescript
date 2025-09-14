import useGlobalData from "@/data/useGlobalData";
import { MarketGlobalSchema } from "@/types/MarketGlobalSchema";
import { Card } from "./ui/card";

export default function MarketOverview() {
    const data = useGlobalData();

    if (data) {
        const parsedData = MarketGlobalSchema.parse(data!);
        console.log(parsedData);

        const {
            total_market_cap,
            total_volume,
            active_cryptocurrencies,
            market_cap_percentage,
            market_cap_change_percentage_24h_usd,
        } = parsedData.data!;

        return (
            <Card className="bg-[#1d1e21] border-[#3e3e3f] mb-4 rounded-2xl p-6 shadow-md">
                <h1 className="text-xl font-bold text-white mb-6">
                    Market Overview
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <Card className="bg-[#1d1e21] border border-[#3e3e3f] rounded-xl p-4 flex flex-col items-center justify-center">
                        <span className="text-[#fbbf24] bg-[#fbbf24]/30 p-1 rounded-sm">
                            {market_cap_change_percentage_24h_usd}%
                        </span>
                        <h2 className="text-lg font-semibold text-[#fbbf24]">
                            {Object.keys(total_market_cap!).reduce(
                                (sum, cur) => {
                                    return sum + total_market_cap![cur];
                                },
                                0
                            )}
                            $
                        </h2>
                        <p className="text-md font-semibold text-white">
                            Total market cap
                        </p>
                    </Card>
                    <Card className="bg-[#1d1e21] border border-[#3e3e3f] rounded-xl p-4 flex flex-col items-center justify-center">
                        <span className="market_percent"></span>
                        <h2 className="text-lg font-semibold text-[#fbbf24]">
                            {Object.keys(total_volume!).reduce((sum, cur) => {
                                return sum + total_volume![cur];
                            }, 0)}
                            $
                        </h2>
                        <p className="text-md font-semibold text-white">
                            Volume
                        </p>
                    </Card>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="bg-[#1d1e21] border border-[#3e3e3f] rounded-xl p-4 flex flex-col items-center justify-center">
                        <h2 className="text-lg font-semibold text-[#fbbf24]">
                            {active_cryptocurrencies}
                        </h2>
                        <p className="text-md font-semibold text-white">
                            Total Cryptocurrencies
                        </p>
                    </Card>
                    <Card className="bg-[#1d1e21] border border-[#3e3e3f] rounded-xl p-4 flex flex-col items-center justify-center">
                        <h2 className="text-lg font-semibold text-[#fbbf24]">
                            {market_cap_percentage!["btc"]}%
                        </h2>
                        <p className="text-md font-semibold text-white">
                            Bitcoin Dominance
                        </p>
                    </Card>
                </div>
            </Card>
        );
    }
}
