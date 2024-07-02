import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Import Routes */

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Package from "./pages/Package";
import Single from "./pages/Single";

/* Import components */

import NavBar from "./components/Navbar2";
import Footer from "./components/Footer";

/*
<NavBar />
*/

function App() {
    return (
        <Router>
            <Footer />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/package" element={<Package />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/single" element={<Single />} />
            </Routes>
        </Router>
    );
}

export default App;
