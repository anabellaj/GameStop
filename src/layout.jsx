import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import WelcomePage from './Pages/WelcomePage/WelcomePage.jsx'
import LogInPage from './Pages/LogInPage/LogInPage.jsx'
import SignUpPage from './Pages/SignUpPage/SignUpPage.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'

const MainRoutes = () => {
    const location = useLocation();
    const showNavBar = location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signup";

    return (
        <div>
            {showNavBar && <NavBar />}
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/signup" element={<SignUpPage/>} />
                <Route path="/home" element={<MainPage />} />
                <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
        </div>
    );
};

const Layout = () => {
    return (
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
    );
};

export default Layout;