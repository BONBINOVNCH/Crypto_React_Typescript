import Header from "./components/Header";
import Toppers from "./components/Toppers";
import "./index.css";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <div className="main_left">
                    <section className="main_toppers">
                        <Toppers></Toppers>
                    </section>
                    <section></section>
                </div>
                <div className="main_right"></div>
            </main>
        </>
    );
}

export default App;
