import React from "react";

function ItemTipo(props) {

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
          method: 'DELETE',
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          } else {
            alert("Eliminado correctamente!");
          }

        })
        .catch(error => console.error('Error deleting item:', error));
      };

    const handleModificar = (id) => {
        alert("MODIFICAR - EN DESARROLLO")
    }

    return(
        <tr className="itemTipo">
            <td>{props.id}</td>
            <td>{props.descripcion}</td>
            <td><button onClick={() => handleModificar(props.id)}>Modificar</button></td>
            <td><button onClick={() => handleDelete(props.id)}>Eliminar</button></td>
        </tr>
    );
}

export default ItemTipo;