import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Ajusta la ruta si es necesario

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top navbar-transparent">
      <div className="container">        
        <Link to="/" className="navbar-brand">
          <h1 className='h1_header'>hotelFlix</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="nav-pers navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-pers-link nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-pers-link nav-link">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-pers-link nav-link">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-pers-link nav-link">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
