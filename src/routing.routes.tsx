import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Home from "./pages/Home";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routing