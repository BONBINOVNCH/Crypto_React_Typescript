// import useGetData from "@/hooks/useGetData";
import React from "react";
import useDataCoins from "@/data/useDataCoins";

function Toppers() {
    const data = useDataCoins();
    if (data) {
        console.log(data);
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
