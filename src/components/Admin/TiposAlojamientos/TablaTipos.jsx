import React, {useState, useEffect} from "react";
import ItemTipo from "./ItemTipo";

function TablaTipos() {
    const [tiposAlojamiento, setTiposAlojamiento] = useState([]);

    useEffect(() => {
      // Función para hacer la solicitud GET
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
          if (!response.ok) {
            throw new Error('Hubo un error al obtener los datos');
          }
          const data = await response.json();
          setTiposAlojamiento(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      // Llamada a la función para obtener los datos cuando el componente se monta
      fetchData();
    }, []); // El segundo parámetro de useEffect [] asegura que esta solicitud se realice solo una vez al montar el componente

    return (
      <table className="tablaTipos" border="3">
        <caption>Tipos de alojamientos</caption>
        <thead>
            <tr>
                <th>id</th>
                <th>Descr.</th>
                <th>Modificar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            {tiposAlojamiento.map( tipo => <ItemTipo id = {tipo.idTipoAlojamiento} descripcion={tipo.Descripcion} />)}
        </tbody>
      </table>
    )
}

export default TablaTipos;