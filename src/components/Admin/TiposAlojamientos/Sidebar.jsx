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
<<<<<<< HEAD
                <Button name="alojamientos" onClick = {handleClick} className="btn font_color botonsb btn-lg m-3">Alojamiento</Button>
                <Button name="tipos" onClick = {handleClick}className="btn font_color botonsb btn-lg m-3">Tipo de alojamiento</Button>
=======
                <Button name="alojamientos" onClick = {handleClick} className="botones">Alojamiento</Button>
                <Button name="tipos" onClick = {handleClick}className="botones">Tipo de alojamiento</Button>
>>>>>>> c7d792ccbe6f353a96b296a34f13a2bf667569a6
            </div>
        </div>

    );
}

export default Sidebar;