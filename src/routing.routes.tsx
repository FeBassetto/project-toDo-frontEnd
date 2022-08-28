import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./layouts/Container/Container";

//Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import DeleteUser from "./pages/DeleteUser";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";

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
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/delete" element={<DeleteUser />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/tasks/newTask" element={<NewTask />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default Routing