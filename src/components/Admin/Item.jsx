import React from "react";
import "../../styles/modales.css";
import "../../styles/filasTabla.css";

function ItemTipo({ tipo, handleShowUpdate, handleDelete }) {
  const id = Object.values(tipo)[0];
  
  return (
    <tr>
      {Object.keys(tipo).map((key) => (
        <td key={key}>{tipo[key]}</td>
      ))}
      <td>
        <p
          className="bi bi-pencil-fill icon-style-pers editar"
          onClick={() => handleShowUpdate(tipo.idTipoAlojamiento, tipo.Descripcion)}
        ></p>
      </td>
      <td>
        <p
          className="bi bi-trash-fill icon-style-pers eliminar"
          onClick={() => handleDelete(id)}
        ></p>
      </td>
    </tr>
  );
}

export default ItemTipo;
