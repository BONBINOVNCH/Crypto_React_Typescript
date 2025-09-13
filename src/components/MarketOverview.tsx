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
        } = parsedData.data!;

        return (
            <Card className="market">
                <h1 className="market_title">Market Overview</h1>
                <div className="market_flex_block flex flex-wrap">
                    <Card className="market_block ">
                        <span className="market_percent"></span>
                        <h2 className="market_title">
                            {Object.keys(total_market_cap!).reduce(
                                (sum, cur) => {
                                    return sum + total_market_cap![cur];
                                },
                                0
                            )}
                            $
                        </h2>
                        <p className="market_subtitle">Total market cap</p>
                    </Card>
                    <Card className="market_block">
                        <span className="market_percent"></span>
                        <h2 className="market_title">
                            {Object.keys(total_volume!).reduce((sum, cur) => {
                                return sum + total_volume![cur];
                            }, 0)}
                            $
                        </h2>
                        <p className="market_subtitle">Volume</p>
                    </Card>
                </div>

                <div className="market_flex_block flex flex-wrap">
                    <Card className="market_block">
                        <h2 className="market_title">
                            {active_cryptocurrencies}
                        </h2>
                        <p className="market_subtitle">
                            Total Cryptocurrencies
                        </p>
                    </Card>
                    <Card className="market_block">
                        <h2 className="market_title">
                            {market_cap_percentage!["btc"]}%
                        </h2>
                        <p className="market_subtitle">Bitcoin Dominance</p>
                    </Card>
                </div>
            </Card>
        );
    }
}
