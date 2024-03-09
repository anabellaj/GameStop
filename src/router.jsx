import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage.jsx";
import { LoginPage } from "./Pages/LoginPage/LoginPage.jsx";
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage.jsx";
import { WelcomePage } from "./Pages/WelcomePage/WelcomePage.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/home", element: <MainPage /> },
  { path: "*", element: <h1>Not Found</h1> },
]);
