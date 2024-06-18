import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeartTransp from "../assets/tarjetas/heart-transp.png";
import HeartFull from "../assets/tarjetas/heart-Full.png";
import bath from "../assets/tarjetas/banera.png";
import dorm from "../assets/tarjetas/dormitorio.png";

function Tarjeta({ alojamiento: {imagen, PrecioPorDia, CantidadDormitorios, CantidadBanios, Titulo, Descripcion, oferta}, image}) {
  const [like, setLike] = useState(false);

  return (
    <div className="tarjeta">
      <img src={image} alt="tarjeta" />
      <div className="tarjetafavoriteIcon" onClick={(e) => setLike(!like)}>
        <img src={like ? HeartFull : HeartTransp} alt="favorito" />
      </div>
      <p className="tarjetaPrecioDia">${PrecioPorDia}</p>
      <div className="tarjetaInfoIcons">
        <img src={dorm} alt="Dormitorios" />
        <p>{CantidadDormitorios}</p>
        <img src={bath} alt="Baños" />
        <p>{CantidadBanios}</p>
      </div>
      <div className="tarjetaContenido">
        <h4 className="tarjetaTitulo">{Titulo}</h4>
        <p className="tarjetaDescripcion">{Descripcion}</p>
        <div className="tarjetaPie">
          <p className="tarjetaPieOferta">Oferta! {oferta}</p>
          <Link className="tarjetaPieBoton" to="/">
            ¡Reserva Ya!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
