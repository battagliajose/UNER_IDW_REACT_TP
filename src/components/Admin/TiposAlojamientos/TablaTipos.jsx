import React from "react";
import ItemTipo from "./ItemTipo";

function TablaTipos({ tiposAlojamiento, fetchTiposAlojamiento,cambiarNombreBoton,cargarDescripcionEnForm }) {
//    Se recibe la lista y las funciones para pasarlas a otro componente( funciones fetchTiposAlojamiento y cambiarNombreBoton ) 
   
   
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
                    //   Se pasan las funciones recibidas al componente ItemTipo de
                      fetchTiposAlojamiento={fetchTiposAlojamiento}
                      cambiarNombreBoton ={cambiarNombreBoton}
                      cargarDescripcionEnForm={cargarDescripcionEnForm}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default TablaTipos;
