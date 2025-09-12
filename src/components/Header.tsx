import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store";
import useDataCoins, { ExpandedCoin } from "@/data/useDataCoins";
import { Card } from "./ui/card";

function Header(): React.JSX.Element | undefined {
    const inputCoin = useStore((state) => state.inputCoin);
    const setInputCoin = useStore((state) => state.setInputCoin);

    const data = useDataCoins();

    if (data)
        return (
            <>
                <header className="header items-center flex justify-between m-5">
                    <div className="header_block flex items-center w-[100%]">
                        <img
                            src="./img/binance-coin-logo-svg-vector.svg"
                            className="header_logo h-10 mr-[10px]"
                            alt=""
                        />
                        <h1 className="sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
                            cryptoSite
                        </h1>
                    </div>

                    <nav className="search_blcok relative">
                        <div className="flex flex-wrap w-full max-w-sm items-center justify-end gap-2">
                            <Input
                                className="sm:w-[58%] text-white w-[100%] rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setInputCoin(e.target.value)}
                                value={inputCoin}
                                type="search"
                                placeholder="Search crypto..."
                            />
                            <Button
                                className="rounded-lg border border-gray-300 text-white bg-[#3e3e3fff] shadow-sm hover:bg-yellow-500 hover:text-white transition"
                                type="submit"
                                variant="outline"
                            >
                                Search
                            </Button>
                        </div>

                        {inputCoin.length > 0 && (
                            <LiveSearch
                                data={data}
                                inputCoin={inputCoin}
                                setInputCoin={setInputCoin}
                            />
                        )}
                    </nav>
                </header>
            </>
        );
}

function LiveSearch({
    data,
    inputCoin,
}: {
    data: ExpandedCoin[];
    inputCoin: string;
    setInputCoin: (coin: string) => void;
}) {
    const filterData = data.filter((coin) => {
        return coin.name.toLowerCase().includes(inputCoin.toLowerCase());
    });
    const setOpen = useStore((state) => state.setOpen);
    const open = useStore((state) => state.open);
    return (
        <Card className="w-[100%] absolute mt-2 p-3 rounded-xl shadow-lg border border-gray-200 bg-[#3e3e3fff] ">
            {filterData.length > 0 ? (
                <>
                    {filterData.slice(0, 5).map((coin) => (
                        <div
                            key={coin.id}
                            onClick={() => {
                                setOpen(true);
                                console.log(open);
                            }}
                            className="flex"
                        >
                            <img
                                src={coin.image}
                                alt=""
                                className="w-6 h-6 mr-[7px]"
                            />
                            <h2 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                {coin.name}
                            </h2>
                        </div>
                    ))}
                    <button
                        className="w-full text-center mt-2 py-1 text-sm font-medium text-yellow-600 hover:underline"
                        onClick={() => setOpen(true)}
                    >
                        see all +{filterData.length}
                    </button>
                </>
            ) : (
                <p className="text-gray-500 text-sm">Nothing found</p>
            )}
        </Card>
    );
}

export default Header;
