import useCategoriesData from "@/data/useCategoriesData";
import { Card } from "./ui/card";
import useDataSum from "@/data/useDataSum";

export default function MarketHighlight() {
    const categories = useCategoriesData();
    const exchange = useDataSum();

    if (categories && exchange)
        return (
            <>
                <Card className="marketHighlight">
                    <div className="marketHighlight_block flex justify-between align-middle">
                        <img
                            className="h-15 "
                            src="./img/pedestal.png"
                            alt=""
                        />
                        <h5 className="h-[auto] text-center">
                            Market Categories Top
                        </h5>
                        <ul className="marketHighlight_categories">
                            <li>{categories[0].name}</li>
                            <li>{categories[1].name}</li>
                            <li>{categories[2].name}</li>
                        </ul>
                    </div>
                    <div className="marketHighlight_block flex justify-between">
                        <img className="h-15" src="./img/pedestal.png" alt="" />
                        <h5 className="h-[auto] text-center">Market Pairs</h5>
                        <span className="marketHighlight_number">
                            {exchange.reduce((sum, obj) => {
                                return sum + obj.trade_volume_24h_btc;
                            }, 0)}
                        </span>
                    </div>
                </Card>
            </>
        );
}
