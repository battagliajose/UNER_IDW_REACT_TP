import React, {useEffect, useState} from 'react'
import '../../../styles/alojamiento.css'
import * as API from '../API'
import TablaTipos from '../TablaCrud'

function Alojamientos(){

    const [alojamientos, setAlojamientos] = useState([])

    const fetchAlojamientos = async () => {
        const data = await API.fetchData("http://localhost:3001/alojamiento/getAlojamientos");
        if (data) {
            setAlojamientos(data);
        }
      };
    
      useEffect(() => {
        // Obtener datos cuando el componente se monta
        fetchAlojamientos();
      }, []);

    return (
        <div className='contenedor-alojamiento'>
            <h2>CRUD de Alojamientos</h2>
            <TablaTipos
            tiposAlojamiento={alojamientos}
            fetchTiposAlojamiento={fetchAlojamientos}
            handleDelete={fetchAlojamientos}
            handleShowUpdate={fetchAlojamientos}
          />
        </div>

        

    );


}

export default Alojamientos;
