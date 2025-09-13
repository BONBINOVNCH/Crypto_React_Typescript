import useDataCoins from "@/data/useDataCoins";

function Toppers() {
    const data = useDataCoins();
    if (data) {
        console.log(data);
        return (
            <div className="toppers_block flex flex-wrap items-center justify-evenly">
                <div className="topper m-3 relative flex flex-wrap items-center p-4 rounded-xl shadow-md border border-gray-200 bg-[#3e3e3fff] justify-center ">
                    <img
                        src={data[0].image}
                        alt=""
                        className="topper_img w-12 h-12 mb-2 mr-2"
                    />
                    <h5 className="topper_name text-lg font-semibold text-gray-100 mr-2">
                        {data[0].name}
                    </h5>
                    <h5 className="topper_price text-base text-gray-300 mr-2">
                        {data[0].current_price}$
                    </h5>
                    <h5
                        className={`topper_change  text-sm font-medium ${
                            data[0].price_change_percentage_24h >= 0
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {data[0].price_change_percentage_24h}%
                    </h5>
                </div>
                <div className="topper relative m-3 flex flex-wrap items-center p-4 rounded-xl shadow-md border border-gray-200 bg-[#3e3e3fff] justify-center  ">
                    <img
                        src={data[1].image}
                        alt=""
                        className="topper_img w-12 h-12 mb-2 mr-2"
                    />
                    <h5 className="topper_name text-lg font-semibold text-gray-100 mr-2">
                        {data[1].name}
                    </h5>
                    <h5 className="topper_price text-base text-gray-300 mr-2">
                        {data[1].current_price}$
                    </h5>
                    <h5
                        className={`topper_change  text-sm font-medium ${
                            data[1].price_change_percentage_24h >= 0
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {data[1].price_change_percentage_24h}%
                    </h5>
                </div>
                <div className="topper relative m-3 flex flex-wrap items-center p-4 rounded-xl shadow-md border border-gray-200 bg-[#3e3e3fff] justify-center  ">
                    <img
                        src={data[2].image}
                        alt=""
                        className="topper_img w-12 h-12 mb-2 mr-2"
                    />
                    <h5 className="topper_name text-lg font-semibold text-gray-100 mr-2">
                        {data[2].name}
                    </h5>
                    <h5 className="topper_price text-base text-gray-300 mr-2">
                        {data[2].current_price}$
                    </h5>
                    <h5
                        className={`topper_change  text-sm font-medium ${
                            data[2].price_change_percentage_24h >= 0
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {data[2].price_change_percentage_24h}%
                    </h5>
                </div>
            </div>
        );
    } else return null;
}

export default Toppers;
