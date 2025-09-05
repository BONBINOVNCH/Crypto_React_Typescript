import useGetData from "@/hooks/useGetData";
import { useStore } from "@/store";

interface PriceHistory {
    prices: [];
    market_caps: [];
    total_volumes: [];
}

export default function useDataCoinHistory() {
    const coin = useStore((store) => store.coin);
    console.log(coin);
    let url = `https://api.coingecko.com/api/v3/coins/${coin?.id}/market_chart?vs_currency=usd&days=90`;
    if (!coin) {
        url =
            "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=90";
    }

    console.log(url);
    const data = useGetData<PriceHistory>(url);
    if (data) {
        console.log(data);
        return data;
    }
}

//  `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=90`
