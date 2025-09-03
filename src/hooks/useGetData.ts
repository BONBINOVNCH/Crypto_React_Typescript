import { useEffect, useRef, useState } from "react";

const keys = import.meta.env.VITE_API_KEYS;

function useGetData<T>(url: string): T | null {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<null | T>(null);
    const effectRun = useRef(true);

    useEffect(() => {
        if (effectRun.current) {
            const getData: () => Promise<void> = async () => {
                try {
                    setLoading(true);
                    console.log(loading);
                    console.log("Loading");

                    const options = {
                        method: "GET",
                        headers: {
                            accept: "application/json",
                            "x-cg-demo-api-key": keys,
                        },
                    };

                    const response: Response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error("Щось не так");
                    }

                    const json = await response.json();
                    setData(json);
                } catch (err) {
                    console.log(err);
                } finally {
                    setLoading(false);
                    console.log("done");
                }
            };
            effectRun.current = false;
            getData();
        }
    }, [url]);

    return data;
}

export default useGetData;
