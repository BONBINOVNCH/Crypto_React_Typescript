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
        <div className="wrap relative ">
            <Header />
            <main className="main flex flex-wrap justify-between">
                <div className="main_left ">
                    <section className="main_toppers">
                        <Toppers></Toppers>
                    </section>
                    <section className="main_dashbord_block">
                        <ChartAreaInteractive />
                    </section>
                    <section className="main_table">
                        <TableCom />
                    </section>
                </div>
                <div className="main_right flex-1">
                    <section className="main_marketOverview ">
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
