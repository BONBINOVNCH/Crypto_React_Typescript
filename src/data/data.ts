type Fetch = {
    method: string;
    headers: {
        accept: string;
        "x-cg-demo-api-key": string;
    };
};

const data = (): void => {
    const url = "https://api.coingecko.com/api/v3/asset_platforms";
    const options: Fetch = {
        method: "GET",
        headers: {
            accept: "application/json",
            "x-cg-demo-api-key": import.meta.env.API_KEYS,
        },
    };

    fetch(url, options)
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error(err));
};

export default data;
