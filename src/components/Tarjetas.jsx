import React, { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";
import "../styles/tarjetas.css";
import * as API from "./Admin/API";

function Tarjetas({selectedTipo,selectedDormitorios,btnBuscar}) {
  const [alojamientos, setAlojamientos] = useState([]);
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    const fetchCards = async () => {
             
          const dataAloj = await API.fetchData("http://localhost:3001/alojamiento/getAlojamientos");
          const images = await API.fetchData("http://localhost:3001/imagen/getAllImagenes");     
         
          // variable aux para filtrar
          let alojamientoFiltrado = [];
          

          if ((selectedTipo!== "-1" || selectedDormitorios!== "-1") && btnBuscar && selectedTipo!== "" && selectedDormitorios!== "") {
            alojamientoFiltrado = dataAloj.filter(alojamiento => {
              return (
                (alojamiento.idTipoAlojamiento === parseInt(selectedTipo)) &&
                (alojamiento.CantidadDormitorios === parseInt(selectedDormitorios))
              );
            });
                     
             setAlojamientos(alojamientoFiltrado);
            
          } else {                         
              // Sino hay datos en selectedTipo, selectedDormitorios hago un random de 5 item
              const maxIndex = Math.max(0, dataAloj.length - 5);
              const i = Math.floor(Math.random() * (maxIndex + 1));
              const rangoRandom = dataAloj.slice(i, i + 5);
              setAlojamientos(rangoRandom);
            
          }
          setImages(images);
    };

    fetchCards();
  }, [selectedTipo, selectedDormitorios,btnBuscar]);

  return (
    <div className="tarjetas">
      {alojamientos.map((alojamiento) => {
        const image = images.find(image => image.idAlojamiento === alojamiento.idAlojamiento);
        return (
          <Tarjeta key={alojamiento.id} alojamiento={alojamiento} image={image? image.RutaArchivo : null}/>
        );
      })}
    </div>
  );
}

export default Tarjetas;
