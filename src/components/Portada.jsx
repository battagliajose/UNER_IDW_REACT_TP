import React, { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import "../styles/portada.css";
import portadaImagen from "../assets/portada/friends-planning-travel-looking-at-map-article-032822_wide.jpg";
import * as API from "./Admin/API";

function Portada({ setSelectedTipo, setSelectedDormitorios,setbtnBuscarHome}) {

  const [tipoAlojamiento,setTipoAlojamiento]=useState([])
  const [tipo, setTipo] = useState("");
  const [dormitorios, setDormitorios] = useState("");  
  const [btnBuscar, setbtnBuscar] = useState(false);

  const handleTipoChange = (e) => {
    const selectedIdTipo = e.target.options[e.target.selectedIndex].value;
    setTipo(selectedIdTipo);
    setSelectedTipo(selectedIdTipo);
    setbtnBuscar(false);
  };

  const handleDormitoriosChange = (e) => {
    setDormitorios(e.target.value);
    setSelectedDormitorios(e.target.value);
    setbtnBuscar(false);
  };

  const handleButtonClick = () => {
    setbtnBuscarHome(true);
    const tarjetasElement = document.querySelector(".tarjetas");  
    tarjetasElement.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    setSelectedTipo(tipo);
    setSelectedDormitorios(dormitorios);

    const fetchTiposAlojamiento=async () => {
      const dataTipoAlojamiento = await API.fetchData("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");      
      setTipoAlojamiento(dataTipoAlojamiento);

    };

    fetchTiposAlojamiento();
   console.log("los datos de tipos alojamient", tipoAlojamiento);
  }, []);

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
            value={tipo}        
            onChange={handleTipoChange}
          >
             <option value="-1">¿Qué buscas?</option>
             {tipoAlojamiento.map((tipoAloj, index) => (
              <option key={tipoAloj.idTipoAlojamiento} value={tipoAloj.idTipoAlojamiento}>
            {tipoAloj.Descripcion}
            </option>
  ))}


          </Form.Select>
          <Form.Select
            className="inputPortada"
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
