import React from "react";
import Tarjeta from "./Tarjeta"
import '../styles/tarjetas.css'
import alojamientos from '../alojamientos.json'

function Tarjetas(props) {
    return (
        <div className='cards'>
            {alojamientos.map(Tarjeta)}
        </div>
    );
}

export default Tarjetas;