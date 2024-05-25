import '../styles/navbar.css'
import React from "react";
import { Link } from "react-router-dom"; 

   /* <div classNameName="navbar">
            <Link to="/">Home -</Link>
            <Link to="/nosotros">Nosotros -</Link>
            <Link to="/contacto">Contacto</Link>
        </div>*/

const NavBar = () => { 
    
    return(     
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container">                  
                  <h1><Link to="/">hotelFlix</Link></h1>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav nav-pers">
                      <li className="nav-item">
                        <Link to="/" className="nav-pers-link nav-link">Home -</Link>                        
                      </li>
                      <li className="nav-item">
                        <Link to="/nosotros" className="nav-pers-link nav-link">Nosotros -</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contacto" className="nav-pers-link nav-link">Contacto</Link>                        
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>        
        </>
    );
}

    

    

export default NavBar