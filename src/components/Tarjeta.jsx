import React from "react";
import { Link } from "react-router-dom"; 

function Tarjeta(alojamiento) {
    return( 
        <div className="card">
        <img src={alojamiento.imagen} alt="card" />
        <div className="cardContenido">
            <h4 className="cardTitulo">{alojamiento.titulo}</h4>
            <p className="cardDescripcion">{alojamiento.descripcion}</p>
            <div className="cardPie">
                <p className="cardPieOferta">Oferta! {alojamiento.oferta}</p>
                <Link className="cardPieBoton" to="/">¡Reserva Ya!</Link> 
            </div>
        </div>
    </div>
    );
}

export default Tarjeta;