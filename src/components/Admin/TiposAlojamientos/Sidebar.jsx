import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../../styles/sidebar.css";

function Sidebar() {


    return (
        
        <div className='sidebar-contenedor'>
            <h2>Administracion del usuario</h2>
            <div className='opciones'>
                <Link className="btn btn-danger btn-lg m-3" to='/alojamiento'>Alojamiento</Link>
                <Link className="btn btn-danger btn-lg m-3"to='/tipoalojamiento'>Tipo de alojamiento</Link>
            </div>
        </div>

    );
}

export default Sidebar;