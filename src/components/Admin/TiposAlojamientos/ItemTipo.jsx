import React from "react";

function ItemTipo({ id, descripcion, fetchTiposAlojamiento }) {
    
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

    const handleModificar = (id) => {
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
