import React from "react";
import ItemTipo from "./ItemTipo";

function TablaTipos({ tiposAlojamiento, fetchTiposAlojamiento }) {
    return (
        <table className="tablaTipos" border="3">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Descr.</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {tiposAlojamiento.map(tipo => (
                    <ItemTipo 
                      key={tipo.idTipoAlojamiento} 
                      id={tipo.idTipoAlojamiento} 
                      descripcion={tipo.Descripcion} 
                      fetchTiposAlojamiento={fetchTiposAlojamiento} 
                    />
                ))}
            </tbody>
        </table>
    );
}

export default TablaTipos;
