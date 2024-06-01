import React from "react";

function ItemTipo({ id, descripcion, fetchTiposAlojamiento,cambiarNombreBoton,cargarDescripcionEnForm }) {
        // Se reciben los datos del listados destructurados y las funciones fetchTiposAlojamiento y cambiarNombreBoton 

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Hubo un error al eliminar el tipo de alojamiento');
            } else {
                alert("Eliminado correctamente!");
                fetchTiposAlojamiento(); // Actualizar la lista de tipos de alojamiento
            }
        } catch (error) {
            console.error('Error eliminando:', error);
        }
    };

    const handleModificar = async (id) => {
       
        cambiarNombreBoton("Modificar"); // Acciono la funcion declarada en el component Admin

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
                cargarDescripcionEnForm(data.Descripcion)

                fetchTiposAlojamiento(); // Actualizar la lista de tipos de alojamiento
            }
        } catch (error) {
            console.error('Hubo un error al modificar el tipo de alojamiento:', error);
        }

        alert("MODIFICAR - EN DESARROLLO");
    }

    return (
        <tr className="itemTipo">
            <td>{id}</td>
            <td>{descripcion}</td>
            <td><button onClick={() => handleModificar(id)}>Modificar</button></td>
            <td><button onClick={() => handleDelete(id)}>Eliminar</button></td>
        </tr>
    );
}

export default ItemTipo;
