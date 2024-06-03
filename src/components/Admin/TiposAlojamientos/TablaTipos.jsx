import React, {useState} from "react";
import ItemTipo from "./ItemTipo";
import ModalUpdateTipos from "./ModalUpdateTipos"
import '../../../styles/filasTabla.css';

function TablaTipos({ tiposAlojamiento, fetchTiposAlojamiento }) {
//    Se recibe la lista y las funciones para pasarlas a otro componente( funciones fetchTiposAlojamiento y cambiarNombreBoton ) 
   
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [IdMod, setIdMod] = useState(0);
    const [DescripMod, setDescripMod] = useState("");
    
    const handleShowUpdate = ({id, descripcion}) => {
        setShowModalUpdate(true);
        setIdMod(id);
        setDescripMod(descripcion)
    }

    const handleCloseUpdate= () => setShowModalUpdate(false);
   
    return (
        <table className="tablaTipos" border="3">
            <thead>
                <tr className="cabecera">
                    <th>id</th>
                    <th style={{ width: '200px' }}>Descripcion</th>
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
                      handleShowUpdate={handleShowUpdate}
                    />
                ))}
            </tbody>
            <ModalUpdateTipos show={showModalUpdate} handleClose={handleCloseUpdate} fetchTiposAlojamiento={fetchTiposAlojamiento} id={IdMod} descrip={DescripMod}/>
        </table>
    );
}

export default TablaTipos;
