import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Package from "./pages/Package"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/package" element={<Package />} />
        <Route  path="/contact" element={<Contact  />} />
        <Route  path="/single" element={<Single />} />
      </Routes>
    </Router>
  )
}

export default App
