import useGetData from "@/hooks/useGetData";

export default function useDataCoins() {
    interface Coin {
        id: string;
        name: string;
        image: string;
        current_price: number;
        price_change_percentage_24h: number;
    }

    const data = useGetData<Coin[]>(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    return data;
}

//  `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=90`
