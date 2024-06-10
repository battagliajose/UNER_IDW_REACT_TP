import React from "react";
import ItemTipo from "./Item";

import "../../styles/filasTabla.css";

function TablaTipos({ tiposAlojamiento, handleDelete, handleShowUpdate }) {

  // Obtener los encabezados de la tabla a partir de las claves del primer objeto
  if (!tiposAlojamiento || tiposAlojamiento.length === 0 ) { return <h2>No data!</h2> }
  const headers = Object.keys(tiposAlojamiento[0]);
  
  return (
    <div className="tabla-container">
      <table className="tablaTipos" border="3">
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
          {tiposAlojamiento.map((tipo) => (
            <ItemTipo
              key={tipo.idTipoAlojamiento}
              tipo={tipo}
              handleShowUpdate={()=> {handleShowUpdate(tipo)}}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaTipos;
