import React,{useState} from "react";
import '../../../styles/modales.css';
import '../../../styles/filasTabla.css';
function ItemTipo({ id, descripcion, fetchTiposAlojamiento, handleShowUpdate}) {
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
        <tr>
            <td>{id}</td>
            <td>{descripcion}</td>
            <td><p className='bi bi-pencil-fill icon-style-pers editar' onClick={() => handleShowUpdate({ id, descripcion })}></p></td>
            <td><p className='bi bi-trash-fill icon-style-pers eliminar' onClick={() => handleDelete(id)}></p></td>
            <td className={snack ? 'mostrarSnack' : 'ocultarSnack'} >Tipo de alojamiento creado</td>
        </tr>
        </>
    );
}

export default ItemTipo;
