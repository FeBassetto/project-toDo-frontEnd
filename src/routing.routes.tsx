import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./layouts/Container/Container";

//Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

//Layouts
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Warning from "./layouts/Warning/Warning";

const Routing = () => {
    return (
        <Router>
            <Header />
            <Warning />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default Routing