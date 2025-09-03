import useGetData from "@/hooks/useGetData";

function Toppers() {
    const data = useGetData(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=15&page=1"
    );
    console.log(data);
    return <div>ffrfrfr</div>;
}

export default Toppers;
