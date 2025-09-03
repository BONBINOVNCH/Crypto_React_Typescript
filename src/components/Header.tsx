import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Header(): React.JSX.Element {
    return (
        <>
            <header className="header">
                <img className="header_logo" alt="" />
                <h1 className="header_title">cryptoSite</h1>
                <nav className="search_blcok">
                    <div className="flex w-full max-w-sm items-center gap-2">
                        <Input type="email" placeholder="Email" />
                        <Button type="submit" variant="outline">
                            Subscribe
                        </Button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
