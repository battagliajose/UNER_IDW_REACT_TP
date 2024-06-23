import React from "react";
import "../../styles/modales.css";
import "../../styles/filasTabla.css";

function Item({ item, handleShowUpdate, handleDelete }) {
  const id = Object.values(item)[0];
  
  return (
    <tr>
      {Object.keys(item).map((key) => (
        <td key={key}>{item[key]}</td>
      ))}
      <td>
        <p
          className="bi bi-pencil-fill icon-style-pers editar"
          onClick={() => handleShowUpdate(item)}
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

export default Item;
