import React, { useState, useEffect } from 'react';
import TablaTipos from "../components/Admin/TiposAlojamientos/TablaTipos";
/*import CreateTipos from "../components/Admin/TiposAlojamientos/CreateTipos";*/
import ModalCreateTipos from "../components/Admin/TiposAlojamientos/ModalCreateTipos"
import '../styles/admin.css';

function Admin() {
    const [tiposAlojamiento, setTiposAlojamiento] = useState([]);

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

    const [showModalCreate, setShowModalCreate] = useState(false);
    const handleShowCreate = () => setShowModalCreate(true);
    const handleCloseCreate = () => setShowModalCreate(false);

    return (
        <div className="admin">
            <ModalCreateTipos show={showModalCreate} handleClose={handleCloseCreate} fetchTiposAlojamiento={fetchTiposAlojamiento} />
            <div className='tablero'>             
            <h2 className="tituloTipos">Tipos de alojamientos</h2>
            <div className='contenedor-button'>
            <button className='buttonNuevo' onClick={handleShowCreate}>
                +
            </button>             

            </div>
            {/* Paso por props la lista de alojamiento cargada en la funcion fetchTiposAlojamiento, la funcion propia y una funcion para cambiar nombre de botón */}
            <TablaTipos 
                tiposAlojamiento={tiposAlojamiento}
                fetchTiposAlojamiento={fetchTiposAlojamiento}
                cargarDescripcionEnForm={cargarDescripcionEnForm} 
                />           

            </div>
        </div>
    );
}

export default Admin;
