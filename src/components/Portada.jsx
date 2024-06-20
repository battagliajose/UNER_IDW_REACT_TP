import React from "react";
import { Form } from 'react-bootstrap';
import "../styles/portada.css";
import portadaImagen from "../assets/portada/friends-planning-travel-looking-at-map-article-032822_wide.jpg";

function Portada(props) {
  return (
    <section className="portada">
      <div className="contenedorImagenPortada">
        <img
          className="imagenPortada"
          src={portadaImagen}
          alt="friends friends-planning-travel-looking-at-map-article-032822"
        />
        <div className="botonera">
          <Form.Select
            className="inputPortada"
            type="text"
          >
            <option value="-1">Que buscas?</option>
            <option value="Hotel">Hotel</option>
            <option value="Casa">Casa</option>
          </Form.Select>
          <Form.Select
            className="inputPortada"
            type="text"
          >
            <option value="-1">Cuantos dormitorios?</option>
            <option value="1">1 Dormitorio</option>
            <option value="2">2 Dormitorios</option>
          </Form.Select>
          <div className="btnPortada">Encontrar!</div>
        </div>
      </div>
      <div className="espaciador">
        <img
          className="imagenPortadaEspaciador"
          src={portadaImagen}
          alt="friends friends-planning-travel-looking-at-map-article-032822"
        />
      </div>
    </section>
  );
}

export default Portada;
