import React from "react";
import Tarjeta from "./Tarjeta"
import '../styles/tarjetas.css'
import alojamientos from '../alojamientos.json'

function Tarjetas(props) {
    const i = Math.floor(Math.random() * 14)
    const rangoRandom = alojamientos.slice(i, i + 5);
    return (
        <div className='tarjetas'>
            {rangoRandom.map(function (alojamiento)
                {
                    return (
                        <Tarjeta
                            key={alojamiento.id}
                            imagen={alojamiento.imagen}
                            titulo={alojamiento.titulo}
                            descripcion={alojamiento.descripcion}
                            oferta={alojamiento.oferta}
                        />
                    );
                })}
        </div>
    );
}

export default Tarjetas;