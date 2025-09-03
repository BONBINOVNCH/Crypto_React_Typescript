import useGetData from "@/hooks/useGetData";
import React from "react";

function Toppers() {
    interface Coin {
        id: string;
        name: string;
        image: string;
        current_price: number;
    }

    const data = useGetData<Coin[]>(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=current_price_desc&per_page=3&page=1&sparkline=false"
    );

    if (data) {
        console.log(data);
        console.log(data[0]);

        return (
            <div className="toppers_block">
                <div className="topper">
                    <img src={data[0].image} alt="" className="topper_img" />
                    <h5 className="topper_name"></h5>
                </div>
            </div>
        );
    } else return null;
}

export default Toppers;
