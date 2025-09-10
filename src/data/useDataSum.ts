import useGetData from "@/hooks/useGetData";

interface TradeVolume {
    trade_volume_24h_btc: number;
}

export default function useDataSum() {
    const data = useGetData<TradeVolume[]>(
        "https://api.coingecko.com/api/v3/exchanges"
    );
    return data;
}
