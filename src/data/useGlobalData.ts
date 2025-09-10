import useGetData from "@/hooks/useGetData";
import { MarketGlobalSchemaType } from "@/types/MarketGlobalSchema";

export default function useGlobalData() {
    const data = useGetData<MarketGlobalSchemaType>(
        "https://api.coingecko.com/api/v3/global"
    );

    return data;
}
