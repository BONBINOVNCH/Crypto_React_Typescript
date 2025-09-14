import { ChartAreaInteractive } from "./components/ChartAreaInteractive";
import DemoPage from "./components/crypto-dialog/page";
import Header from "./components/Header";
import MarketHighlight from "./components/MarketHighlight";
import MarketOverview from "./components/MarketOverview";
import TableCom from "./components/TableCom";
import Toppers from "./components/Toppers";

import "./index.css";

function App() {
    return (
        <div className="wrap relative m-4">
            <Header />
            <main className="main flex flex-wrap justify-between">
                <div className="main_left w-[auto] lg:w-[63%]">
                    <section className="main_toppers">
                        <h2 className="toppers_title sm:text-2xl font-bold pt-2 text-gray-800 dark:text-gray-100 border-[#fbbf24] border-t-1">
                            Toppers
                        </h2>
                        <Toppers></Toppers>
                    </section>
                    <section className="main_dashbord_block">
                        <ChartAreaInteractive />
                    </section>
                    <section className="main_table">
                        <TableCom />
                    </section>
                </div>
                <div className="main_right grow shrink md:ml-4">
                    <section className="main_marketOverview">
                        <MarketOverview />
                        <MarketHighlight />
                    </section>
                </div>

                <DemoPage />
            </main>
        </div>
    );
}

export default App;
