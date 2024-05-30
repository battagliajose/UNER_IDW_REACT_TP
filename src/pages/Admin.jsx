import React, { useState, useEffect } from 'react';
import TablaTipos from "../components/Admin/TiposAlojamientos/TablaTipos";
import CreateTipos from "../components/Admin/TiposAlojamientos/CreateTipos";
import '../styles/admin.css';

function Admin() {
    const [tiposAlojamiento, setTiposAlojamiento] = useState([]);

    // Función para obtener los datos de los tipos de alojamiento
    const fetchTiposAlojamiento = async () => {
        try {
            const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
            if (!response.ok) {
                throw new Error('Hubo un error al obtener los datos');
            }
            const data = await response.json();
            setTiposAlojamiento(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Obtener datos cuando el componente se monta
        fetchTiposAlojamiento();
    }, []);

    return (
        <div className="admin">
            <h2 className="tituloTipos">Tipos de alojamientos</h2>
            <TablaTipos tiposAlojamiento={tiposAlojamiento} fetchTiposAlojamiento={fetchTiposAlojamiento} />
            <CreateTipos fetchTiposAlojamiento={fetchTiposAlojamiento} />
        </div>
    );
}

export default Admin;
