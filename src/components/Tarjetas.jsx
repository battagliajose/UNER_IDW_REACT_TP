import React, { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";
import "../styles/tarjetas.css";
import * as API from "./Admin/API";

function Tarjetas() {
  const [alojamientos, setAlojamientos] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
        const dataAloj = await API.fetchData("http://localhost:3001/alojamiento/getAlojamientos");
        const images = await API.fetchData("http://localhost:3001/imagen/getAllImagenes");
        setAlojamientos(dataAloj);
        setImages(images);
    };

    fetchCards();
  }, []);

  const maxIndex = Math.max(0, alojamientos.length - 5);
  const i = Math.floor(Math.random() * (maxIndex + 1));
  const rangoRandom = alojamientos.slice(i, i + 5);

  return (
    <div className="tarjetas">
      {rangoRandom.map((alojamiento) => {
        console.log(alojamiento);
        console.log(images);
        return (
          <Tarjeta key={alojamiento.id} alojamiento={alojamiento} image={images.find(image => image.idAlojamiento === alojamiento.idAlojamiento).RutaArchivo}/>
        );
      })}
    </div>
  );
}

export default Tarjetas;
