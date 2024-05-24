import React from "react";
import Tarjeta from "./Tarjeta"
import '../styles/tarjetas.css'

function Tarjetas(props) {
    return (
        <div className='cards'>
            <Tarjeta img="apartment-01"/>
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
        </div>
    );
}

export default Tarjetas;