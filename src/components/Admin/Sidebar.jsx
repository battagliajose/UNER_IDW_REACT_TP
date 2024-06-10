import React  from 'react'
import { Button } from 'react-bootstrap'
import "../../styles/sidebar.css";

function Sidebar({ setCrudToShow }) {

    function handleClick(event){
        const name = event.target.name;
        if(name === "alojamientos") {
            setCrudToShow(0)
        } else if(name === "tipos") {
            setCrudToShow(1)
        } else if(name === "servicios") {
            setCrudToShow(2)
        }
    }

    return (
        <div className='sidebar-contenedor'>
            <h2 className="sidetitulo">Administracion del usuario</h2>
            <div className='opciones'>
                <Button name="alojamientos" onClick = {handleClick} className="botones btn-danger">Alojamientos</Button>
                <Button name="tipos" onClick = {handleClick}className="botones btn-danger">Tipos de alojamientos</Button>
                <Button name="servicios" onClick = {handleClick}className="botones btn-danger">Servicios</Button>
            </div>
        </div>

    );
}

export default Sidebar;