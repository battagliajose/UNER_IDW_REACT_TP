import React from "react";
import { Link } from "react-router-dom"; 
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
                <Link className="cardPieBoton" to="/">¡Reserva Ya!</Link> 
            </div>
        </div>
    </div>
    );
}

export default Tarjeta;