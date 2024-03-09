import {createBrowserRouter} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import {LoginPage} from './pages/LoginPage/LoginPage.jsx';
import {SignUpPage} from './pages/SignUpPage/SignUpPage.jsx';
import {WelcomePage} from './pages/WelcomePage/WelcomePage.jsx';

export const router = createBrowserRouter([
    {path: '/', element: <MainPage />},
    {path: '/login', element: <LoginPage />},
    {path: '/signup', element: <SignUpPage />},
    {path: '/welcome', element: <WelcomePage />},
    {path: '*', element: <h1>Not Found</h1>}
]);