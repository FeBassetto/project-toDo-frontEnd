import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./layouts/Container/Container";
import Header from "./layouts/Header/Header";

//Pages
import Home from "./pages/Home";

const Routing = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Container>
        </Router>
    )
}

export default Routing