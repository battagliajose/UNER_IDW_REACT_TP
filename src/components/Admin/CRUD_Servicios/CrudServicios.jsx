import React, {useEffect, useState} from 'react'
import '../../../styles/alojamiento.css'
import * as API from '../API'
import TablaCrud from '../TablaCrud'

function CrudServicios(){

    const [servicios, setServicios] = useState([])
    const [snack, setSnack] = useState(false);

    const fetchServicios = async () => {
        const data = await API.fetchData("http://localhost:3001/servicio/getAllServicios");
        if (data) {

          setServicios(transformData(data));
        }
      };

      const transformData = (data) => {
        return data.map(item => ({
          ID: item.idServicio,
          Descripción: item.Nombre,
        }));
      };
    
      useEffect(() => {
        // Obtener datos cuando el componente se monta
        fetchServicios();
      }, []);

      const deleteServicio = async (id) => {
        API.deleteItem("http://localhost:3001/servicio/deleteServicio/", id)
        setSnack(true);
        setTimeout(() => {
          setSnack(false);
          fetchServicios(); // Actualizar la lista de tipos de alojamiento
        }, 2000);
      };

    return (
        <div className='contenedor-alojamiento'>
            <h2>CRUD de Servicios</h2>
            <TablaCrud
            registros={servicios}
            fetchTiposAlojamiento={fetchServicios}
            handleDelete={deleteServicio}
            handleShowUpdate={fetchServicios}
          />
        </div>
    );
}

export default CrudServicios;
