import React, {useState} from "react";
import { Form } from 'react-bootstrap';
import "../styles/portada.css";
import portadaImagen from "../assets/portada/friends-planning-travel-looking-at-map-article-032822_wide.jpg";

function Portada({setSelectedTipo, setSelectedDormitorios}) {

  //Variables para filtar el Array de Alojamiento
 const [tipo, setTipo] = useState("");
 const [dormitorios, setDormitorios] = useState("");

  //Caturar y setear el Tipo
  const handleTipoChange = (e) => {
    setTipo(e.target.value);
    setSelectedTipo(e.target.value);
  };
//Caturar y setear la cant de Dormitorios
  const handleDormitoriosChange = (e) => {
    setDormitorios(e.target.value);
    setSelectedDormitorios(e.target.value);
  };

  //Evento boton despues de ser selecionado
  const handleButtonClick = () => {
    const tarjetasElement = document.querySelector(".tarjetas");
    if (tarjetasElement) {
      tarjetasElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            value={tipo}        
            onChange={handleTipoChange}
          >
            <option value="-1">Que buscas?</option>
            <option value="Hotel">Hotel</option>
            <option value="Casa">Casa</option>
          </Form.Select>
          <Form.Select
            className="inputPortada"
            type="text" 
            value={dormitorios}         
            onChange={handleDormitoriosChange}
          >
            <option value="-1">Cuantos dormitorios?</option>
            <option value="1">1 Dormitorio</option>
            <option value="2">2 Dormitorios</option>
          </Form.Select>
          <div className="btnPortada" onClick={handleButtonClick}>Encontrar!</div>
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
