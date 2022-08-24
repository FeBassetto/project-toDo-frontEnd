import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./layouts/Container/Container";

//Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

//Layouts
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

const Routing = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default Routing