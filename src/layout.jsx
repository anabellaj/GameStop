//import React, { useEffect, useMemo } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
//import { useUser } from "./context/user.js";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import WelcomePage from "./Pages/WelcomePage/WelcomePage.jsx";
import LogInPage from "./Pages/LogInPage/LogInPage.jsx";
import SignUpPage from "./Pages/SignUpPage/SignUpPage.jsx";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import VerPerfilPage from './Pages/VerPerfilPage/VerPerfilPage.jsx'
import EditPerfilPage from './Pages/EditPerfilPage/EditPerfilPage.jsx'
import Videogames from './Pages/VideogamesPage/Videogames.jsx'
import DetailsPage from './Pages/DetailsPage/DetailsPage.jsx'


const MainRoutes = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  // const user = useUser();

  const showNavBar =
    location.pathname !== "/" &&
    location.pathname !== "/login" &&
    location.pathname !== "/signup";

  // useEffect(() => {
  //   const isAuthenticated = user !== null;
  //   const allowedRoutesAuthenticated = ["/home"];
  //   const allowedRoutesNotAuthenticated = ["/", "/login", "/signup"];

  //   if (
  //     isAuthenticated &&
  //     !allowedRoutesAuthenticated.includes(location.pathname)
  //   ) {
  //     navigate("/home", { replace: true });
  //   } else if (
  //     !isAuthenticated &&
  //     !allowedRoutesNotAuthenticated.includes(location.pathname)
  //   ) {
  //     navigate("/", { replace: true });
  //   }
  // }, [user, navigate, location.pathname]);

  return (
    <div>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/profile" element={<VerPerfilPage />} />
        <Route path="/editprofile" element={<EditPerfilPage />} />
        <Route path="/videogames" element={<Videogames />} />
        <Route path="/clubs/:ID" element={<DetailsPage />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
      <Footer />
    </div>
  );
    // return (
    //     <div>
    //         {showNavBar && <NavBar />}
    //         <Routes>
    //             <Route path="/" element={<WelcomePage />} />
    //             <Route path="/login" element={<LogInPage />} />
    //             <Route path="/signup" element={<SignUpPage/>} />
    //             <Route path="/home" element={<MainPage />} />
    //             <Route path="/profile" element={<VerPerfilPage />} />
    //             <Route path="/editprofile" element={<EditPerfilPage />} />
    //             <Route path="/videogames" element={<VideogamesPage />} />
    //             <Route path="*" element={<h1>Not found!</h1>} />
    //         </Routes>
    //         <Footer />
    //     </div>
    // );
};

const Layout = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default Layout;
