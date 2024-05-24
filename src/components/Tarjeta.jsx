import React from "react";
import apartmentImage from '../assets/tarjetas/apartment-01.jpg';

function Tarjeta(props) {
    return( 
        <div className="card">
        <img src={apartmentImage} alt="card" />
        <div className="cardContenido">
            <h4 className="cardTitulo">Bella Vista</h4>
            <p className="cardDescripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque praesentium repellat magnam laudantium nisi!</p>
            <div className="cardPie">
                <p className="cardPieOferta">Oferta! 35% off</p>
                <a className="cardPieBoton" href="\">¡Reserva Ya!</a> 
            </div>
        </div>
    </div>
    );
}

export default Tarjeta;