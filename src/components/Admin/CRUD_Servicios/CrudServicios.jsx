import React, {useEffect, useState} from 'react'
import '../../../styles/alojamiento.css'
import * as API from '../API'
import TablaTipos from '../TablaCrud'

function CrudServicios(){

    const [servicios, setServicios] = useState([])

    const fetchServicios = async () => {
        const data = await API.fetchData("http://localhost:3001/servicio/getAllServicios");
        if (data) {
            setServicios(data);
        }
      };
    
      useEffect(() => {
        // Obtener datos cuando el componente se monta
        fetchServicios();
      }, []);

    return (
        <div className='contenedor-alojamiento'>
            <h2>CRUD de Servicios</h2>
            <TablaTipos
            tiposAlojamiento={servicios}
            fetchTiposAlojamiento={fetchServicios}
            handleDelete={fetchServicios}
            handleShowUpdate={fetchServicios}
          />
        </div>
    );
}

export default CrudServicios;
