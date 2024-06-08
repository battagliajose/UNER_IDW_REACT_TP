import React, { Component, useState} from 'react'
import { Button } from 'react-bootstrap'
import "../../../styles/sidebar.css";

function Sidebar({ setCrudToShow }) {

    function handleClick(event){
        const name = event.target.name;
        if(name === "alojamientos") {
            setCrudToShow(0)
        } else if(name === "tipos") {
            setCrudToShow(1)
        }
    }

    return (
        <div className='sidebar-contenedor'>
            <h2>Administracion del usuario</h2>
            <div className='opciones'>
                <Button name="alojamientos" onClick = {handleClick} className="botones">Alojamiento</Button>
                <Button name="tipos" onClick = {handleClick}className="botones">Tipo de alojamiento</Button>
            </div>
        </div>

    );
}

export default Sidebar;