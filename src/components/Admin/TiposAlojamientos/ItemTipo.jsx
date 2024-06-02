import React,{useState} from "react";
import '../../../styles/modales.css';
import '../../../styles/filasTabla.css';
function ItemTipo({ id, descripcion, fetchTiposAlojamiento, handleShowUpdate,colorFila }) {
    // Se reciben los datos del listados destructurados y las funciones fetchTiposAlojamiento y cambiarNombreBoton 

    const[snack, setSnack]=useState(false);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Hubo un error al eliminar el tipo de alojamiento');
            } else {
                
                setSnack(true);

                setTimeout(() => {
                    setSnack(false);
                  }, 2000);
                //alert("Eliminado correctamente!");
                fetchTiposAlojamiento(); // Actualizar la lista de tipos de alojamiento
                
            }
        } catch (error) {
            console.error('Error eliminando:', error);
        }
    };

    const handleModificar = async (id) => {
       
        //buscar el tipo de alojamiento
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${id}`, {
                method: 'GET',
            });
            //controlo que hubo conexion
            if (!response.ok) {
                throw new Error('Hubo un error al cargar el tipo de alojamiento');
            } else {
                
                const data = await response.json();        
                console.log(data.Descripcion);                          

                fetchTiposAlojamiento(); // Actualizar la lista de tipos de alojamiento
            }
        } catch (error) {
            console.error('Hubo un error al modificar el tipo de alojamiento:', error);
        }
    }

    return (
        <>
        <tr className={colorFila===0 ? 'colorearFila':''}>
            <td>{id}</td>
            <td>{descripcion}</td>
            <td><button onClick={() => handleShowUpdate({ id, descripcion })}>Modificar</button></td>
            <td><button onClick={() => handleDelete(id)}>Eliminar</button></td>
        </tr>
        <div className={snack ? 'mostrarSnack' : 'ocultarSnack'} >Tipo de alojamiento creado</div>
        </>
    );
}

export default ItemTipo;
