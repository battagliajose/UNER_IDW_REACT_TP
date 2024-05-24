import React from "react";
import { Link } from "react-router-dom"; 

function Tarjeta(props) {
    return( 
        <div className="card">
        <img src={props.img} alt="card" />
        <div className="cardContenido">
            <h4 className="cardTitulo">{props.titulo}</h4>
            <p className="cardDescripcion">{props.descrip}</p>
            <div className="cardPie">
                <p className="cardPieOferta">Oferta! {props.oferta}</p>
                <Link className="cardPieBoton" to="/">¡Reserva Ya!</Link> 
            </div>
        </div>
    </div>
    );
}

export default Tarjeta;