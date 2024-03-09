import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import WelcomePage from './Pages/WelcomePage/WelcomePage.jsx'
//import LogInPage from './Pages/LogInPage/LogInPage.jsx'
//import SignUpPage from './Pages/SignUpPage/SignUpPage.jsx'
//import MainPage from './Pages/MainPage/MainPage.jsx'
import Layout from "./layout.jsx";
import UserProvider from "./providers/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <Layout />
    </UserProvider>
  </React.StrictMode>
);
