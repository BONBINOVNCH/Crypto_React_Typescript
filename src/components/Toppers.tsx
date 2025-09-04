import useGetData from "@/hooks/useGetData";
import React from "react";

function Toppers() {
    interface Coin {
        id: string;
        name: string;
        image: string;
        current_price: number;
        price_change_percentage_24h: number;
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
                    <h5 className="topper_name">{data[0].name}</h5>
                    <h5 className="topper_price">{data[0].current_price}$</h5>
                    <h5 className="topper_change">
                        {data[0].price_change_percentage_24h}%
                    </h5>
                </div>
                <div className="topper">
                    <img src={data[1].image} alt="" className="topper_img" />
                    <h5 className="topper_name">{data[1].name}</h5>
                    <h5 className="topper_price">{data[1].current_price}$</h5>
                    <h5 className="topper_change">
                        {data[1].price_change_percentage_24h}%
                    </h5>
                </div>
                <div className="topper">
                    <img src={data[2].image} alt="" className="topper_img" />
                    <h5 className="topper_name">{data[2].name}</h5>
                    <h5 className="topper_price">{data[2].current_price}$</h5>
                    <h5 className="topper_change">
                        {data[2].price_change_percentage_24h}%
                    </h5>
                </div>
            </div>
        );
    } else return null;
}

export default Toppers;
