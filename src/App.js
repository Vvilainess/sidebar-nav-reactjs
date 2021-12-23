import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/products" exact element={<Products />} />
                    <Route path="/reports" exact element={<Reports />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
