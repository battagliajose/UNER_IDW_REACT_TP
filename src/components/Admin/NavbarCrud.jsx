import React  from 'react'
import { Button } from 'react-bootstrap'
import "../../styles/navbarcrud.css";

function NavbarCrud({ setCrudToShow }) {

    function handleClick(event) {
      const { name } = event.target;
      if (name === "alojamientos") {
        setCrudToShow(0);
      } else if (name === "tipos") {
        setCrudToShow(1);
      } else if (name === "servicios") {
        setCrudToShow(2);
      }
    }
  
    return (
      <div className="navbar-contenedor container">
        <h2 className="navbar-titulo text-center my-3">Administracion del usuario</h2>
        <div className="d-flex flex-column flex-md-row justify-content-center">
          <Button name="alojamientos" onClick={handleClick} className="btn btn-danger mb-2 mb-md-0 mx-3">Alojamientos</Button>
          <Button name="tipos" onClick={handleClick} className="btn btn-danger mb-2 mb-md-0 mx-3">Tipos de alojamientos</Button>
          <Button name="servicios" onClick={handleClick} className="btn btn-danger mb-2 mb-md-0 mx-3">Servicios</Button>
        </div>
      </div>
    );
  }
  
  export default NavbarCrud;