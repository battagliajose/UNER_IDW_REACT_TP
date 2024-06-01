import React, { useState, useEffect } from 'react';
import TablaTipos from "../components/Admin/TiposAlojamientos/TablaTipos";
import CreateTipos from "../components/Admin/TiposAlojamientos/CreateTipos";
import '../styles/admin.css';

function Admin() {
    const [tiposAlojamiento, setTiposAlojamiento] = useState([]);

    //varible para setear el botón
    const [nombreBoton, setBotonNombre] = useState('Enviar');

    //funcion para cambiar el nombre del botón
    const cambiarNombreBoton = (titulo) => {
        setBotonNombre(titulo);
    };

    const [valorDescripcion, setValorDescripcion] = useState('');

    const cargarDescripcionEnForm= (descripcion) => {        
        setValorDescripcion(descripcion);
    }

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
            
            {/* Paso por props la lista de alojamiento cargada en la funcion fetchTiposAlojamiento, la funcion propia y una funcion para cambiar nombre de botón */}
            <TablaTipos 
                tiposAlojamiento={tiposAlojamiento}
                fetchTiposAlojamiento={fetchTiposAlojamiento}
                cambiarNombreBoton={cambiarNombreBoton} 
                cargarDescripcionEnForm={cargarDescripcionEnForm} 
                />

            {/* Paso por props el nombre del botón seteado con el valor "Enviar",y las funcion para traer la lista de alojamientos y cambiar el nombre del boton*/}
            <CreateTipos 
                fetchTiposAlojamiento={fetchTiposAlojamiento} 
                nombreBoton={nombreBoton}
                cambiarNombreBoton={cambiarNombreBoton} 
                valorDescripcion={valorDescripcion}
                />
        </div>
    );
}

export default Admin;
