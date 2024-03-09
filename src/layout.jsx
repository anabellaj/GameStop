//import React from 'react';
import VerPerfilPage from "./Pages/VerPerfilPage/VerPerfilPage.jsx";
import EditPerfilPage from "./Pages/EditPerfilPage/EditPerfilPage.jsx";
import Videogames from "./Pages/VideogamesPage/Videogames.jsx";



const MainRoutes = () => {
    const location = useLocation();
    const showNavBar = location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signup";


  // useEffect(() => {
  //   if (!isAuthenticated && !allowedRoutes.includes(location.pathname)) {
  //     navigate("/", { replace: true });
  //   } else if (isAuthenticated && !allowedRoutes.includes(location.pathname)) {
  //     navigate("/home", { replace: true });
  //   }
  // }, [isAuthenticated, navigate, location.pathname, allowedRoutes]);

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