import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../../styles/sidebar.css";

function Sidebar() {


    return (
        <div className='sidebar-contenedor'>
            <h2>Administracion del usuario</h2>
            <div className='opciones'>
                <Link to='/alojamiento'>Alojamiento</Link>
                <Link to='/tipoalojamiento'>Tipo de alojamiento</Link>
            </div>
        </div>

    );
}

export default Sidebar;