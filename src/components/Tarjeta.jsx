import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';

import HeartTransp from "../assets/tarjetas/heart-transp.png";
import HeartFull from "../assets/tarjetas/heart-Full.png";
import bath from "../assets/tarjetas/banera.png";
import dorm from "../assets/tarjetas/dormitorio.png";

function Tarjeta({ alojamiento: { PrecioPorDia, CantidadDormitorios, CantidadBanios, Titulo, Descripcion }, image, serviciosAlojamiento }) {
  const [like, setLike] = useState(false);

  const serviciosAlojamientoConValor = serviciosAlojamiento && serviciosAlojamiento.length > 0
    ? serviciosAlojamiento
    : ["No dispone de servicios adicionales"];

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

        <div className="botonesTarj container center-container">
          <div className="row justify-content-center">
          <div className="col-md-3 text-center">
            <Dropdown >
              <DropdownToggle className="tarjetaPieBotonServ btn  btn-dark"caret>
                Servicios
              </DropdownToggle>
              <DropdownMenu>
                {serviciosAlojamientoConValor.map((servicio, index) => (
                  <DropdownItem key={index}>
                    {servicio}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            </div>


            <div className="col-md-3 text-center"></div>
            <Link className="tarjetaPieBoton btn btn-danger" to="/contacto">
              ¡Reserva Ya!
            </Link>
            </div>
          </div>


      </div>
    </div>
  );
}

export default Tarjeta;
