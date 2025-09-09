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
                <header className="header">
                    <img className="header_logo" alt="" />
                    <h1 className="header_title">cryptoSite</h1>
                    <nav className="search_blcok">
                        <div className="flex w-full max-w-sm items-center gap-2">
                            <Input
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setInputCoin(e.target.value)}
                                value={inputCoin}
                                type="search"
                                placeholder="Search crypto..."
                            />
                            <Button type="submit" variant="outline">
                                Subscribe
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
        <Card>
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
                            <img src={coin.image} alt="" />
                            <h2>{coin.name}</h2>
                        </div>
                    ))}
                </>
            ) : (
                "nothing "
            )}
        </Card>
    );
}

export default Header;
