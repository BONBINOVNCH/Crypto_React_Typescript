import useGetData from "@/hooks/useGetData";

interface Categories {
    name: string;
}

export default function useCategoriesData() {
    const data = useGetData<Categories[]>(
        "https://api.coingecko.com/api/v3/coins/categories"
    );
    return data;
}
