import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function NavBar (){
    return(
        <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mi Perfil</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Clubes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Videojuegos</a>
              </li>
           
              
            </ul>
           
                <img style={{width:'50px', height:'50px'}}  src='././GameStopLogo.png'></img>
          
          </div>
        </div>
      </nav>
      )
      }