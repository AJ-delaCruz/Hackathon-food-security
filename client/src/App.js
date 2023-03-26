import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mangos from "./components/specialtyCrops/Mangos";
import Walnuts from "./components/specialtyCrops/Walnuts";
import Bananas from "./components/specialtyCrops/Bananas";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/mangos" element={<Mangos />}></Route>
                <Route path="/walnuts" element={<Walnuts />}></Route>
                <Route path="/bananas" element={<Bananas />}></Route>
                <Route path="/footer" element={<Footer />}></Route>
                <Route path="/login" element={<Login/>}></Route>




            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
