import React from "react";
import Item from "./Item";

import "../../styles/filasTabla.css";

function TablaCrud({ registros, handleDelete, handleShowUpdate }) {

  // Obtener los encabezados de la tabla a partir de las claves del primer objeto
  if (!registros || registros.length === 0 ) { return <h2>No data!</h2> }
  const headers = Object.keys(registros[0]);
  
  return (
    <div className="tabla-container">
      <table className="tabla" border="3">
        <thead>
          <tr className="cabecera">
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro) => (
            <Item
              key={registro[0]}
              item={registro}
              handleShowUpdate={()=> {handleShowUpdate(registro)}}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaCrud;
