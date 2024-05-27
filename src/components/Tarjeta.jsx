import React from "react";
import { Link } from "react-router-dom"; 

import HeartTransp from '../assets/tarjetas/heart-transp.png'
import HeartFull from '../assets/tarjetas/heart-Full.png'

function Tarjeta(props) {
    return( 
        <div className="tarjeta">
        <img src={props.imagen} alt="tarjeta" />
        <div className="tarjetafavoriteIcon"><img src={HeartTransp} alt="favorito" /></div>
        <p className="tarjetaPrecioDia">${props.precio}</p>
        <div className="tarjetaContenido">
            <h4 className="tarjetaTitulo">{props.titulo}</h4>
            <p className="tarjetaDescripcion">{props.descripcion}</p>
            <div className="tarjetaPie">
                <p className="tarjetaPieOferta">Oferta! {props.oferta}</p>
                <Link className="tarjetaPieBoton" to="/">¡Reserva Ya!</Link> 
            </div>
        </div>
    </div>
    );
}

export default Tarjeta;