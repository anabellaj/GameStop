import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import WelcomePage from './Pages/WelcomePage/WelcomePage.jsx'
import LogInPage from './Pages/LogInPage/LogInPage.jsx'
//import SignUpPage from './Pages/SignUpPage/SignUpPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogInPage />
  </React.StrictMode>,
)
