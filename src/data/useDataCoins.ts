import useGetData from "@/hooks/useGetData";

export default function useDataCoins() {
    interface ExpandedCoin {
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

    const data = useGetData<ExpandedCoin[]>(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
    );
    return data;
}
