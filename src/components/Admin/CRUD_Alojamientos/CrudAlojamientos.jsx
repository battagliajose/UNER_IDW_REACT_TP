import React, {useEffect, useState} from 'react'
import '../../../styles/alojamiento.css'
import * as API from '../API'
import TablaCrud from '../TablaCrud'

function Alojamientos(){

    const [alojamientos, setAlojamientos] = useState([])

    const [snack, setSnack] = useState(false);

    const fetchAlojamientos = async () => {
        const data = await API.fetchData("http://localhost:3001/alojamiento/getAlojamientos");
        if (data) {
            setAlojamientos(transformData(data));
        }
    };

    const transformData = (data) => {
        return data.map(item => ({
          ID: item.idAlojamiento,
          Titulo: item.Titulo,
          Descripción: item.Descripcion,
          Latitud: item.Latitud,
          Longitud: item.Longitud,
          "Precio Por Dia": item.PrecioPorDia,
          Baños: item.CantidadBanios,
          Estado: item.Estado,
          Tipo: item.idTipoAlojamiento,
        }));
      };
    
    const deleteAlojamiento = async (id) => {
        API.deleteItem("http://localhost:3001/alojamiento/deleteAlojamiento/", id)
        setSnack(true);
        setTimeout(() => {
            setSnack(false);
            fetchAlojamientos(); // Actualizar la lista de tipos de alojamiento
        }, 2000);
    };
    
      useEffect(() => {
        // Obtener datos cuando el componente se monta
        fetchAlojamientos();
      }, []);

    return (
        <div className='contenedor-alojamiento'>
            <h2>CRUD de Alojamientos</h2>
            <TablaCrud
            registros={alojamientos}
            fetchTiposAlojamiento={fetchAlojamientos}
            handleDelete={deleteAlojamiento}
            handleShowUpdate={fetchAlojamientos}
          />
        </div>
    );
}

export default Alojamientos;
