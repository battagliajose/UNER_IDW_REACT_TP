import React from "react";

function ItemTipo(props) {
    return(
        <tr className="itemTipo">
            <td>{props.id}</td>
            <td>{props.descripcion}</td>
            <td>Modificar</td>
            <td>Eliminar</td>
        </tr>
    );
}

export default ItemTipo;