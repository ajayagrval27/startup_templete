import "bootstrap/dist/css/bootstrap.min.css"
import "./Assets/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"
import Topbar from "./Components/Topbar"
import NavBar from "./Components/NavBar"
import CountNum from "./Components/CountNum"
import About from "./Components/About"
import Featutres from "./Components/Featutres"
import Services from "./Components/Services"
import Prices from "./Components/Prices"
import Quotes from "./Components/Quotes"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavCarousel from "./Components/NavCarousel"

function App() {
    return (
        <>
            <BrowserRouter>
                <Topbar />
                <NavBar />
                <Routes>
                    <Route path="/" element={<NavCarousel />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Featutres" element={<Featutres />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Prices" element={<Prices />} />
                    <Route path="/Quotes" element={<Quotes />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
