import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mangos from "./components/specialtyCrops/Mangos";
import Walnuts from "./components/specialtyCrops/Walnuts";
import Bananas from "./components/specialtyCrops/Bananas";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import MangoData from "./components/Yield/MangoData";
import WalnutData from "./components/Yield/WalnutData";
import SankeyChart from "./components/Import/SankeyChart";
import Import from "./components/Import/Import";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/home";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/mangos" element={<Mangos />}></Route>
                <Route path="/walnuts" element={<Walnuts />}></Route>
                <Route path="/bananas" element={<Bananas />}></Route>
                <Route path="/footer" element={<Footer />}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/mangoyield" element={<MangoData/>}></Route>
                <Route path="/walnutyield" element={<WalnutData/>}></Route>
                <Route path="/import" element={<Import/>}></Route>
                <Route path="/navbar" element={<Navbar/>}></Route>
                <Route path="/home" element={<Home />}></Route>









            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
