import React, {useState, useEffect} from "react";
import TablaCrud from "../TablaCrud";
import ModalTipos from "./ModalTipos";
import * as API from "../API";

function CrudTipos() {
    const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
    const [showModalCreate, setShowModalCreate] = useState(false);

    const [snack, setSnack] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [IdMod, setIdMod] = useState(0);
    const [DescripMod, setDescripMod] = useState("");
  
    const handleShowModal = ({ ID: idTipoAlojamiento, Descripción: Descripcion }) => {
      setShowModal(true);
      setIdMod(idTipoAlojamiento);
      setDescripMod(Descripcion);
    };
    const handleCloseUpdate = () => setShowModal(false);
  
    const handleCreate = () => {
      const itemNuevo = {
        Descripcion: ""
      }
      handleShowModal(itemNuevo);
    };
    const handleCloseCreate = () => setShowModalCreate(false);

    // Función para obtener los datos de los tipos de alojamiento
    const fetchTiposAlojamiento = async () => {
      const data = await API.fetchData("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");
      if (data) {
        setTiposAlojamiento(transformData(data));
      }
    };

    // Cambia los nombres de las columnas para presentarlos en la Tabla
    const transformData = (data) => {
      return data.map(item => ({
        ID: item.idTipoAlojamiento,
        Descripción: item.Descripcion,
      }));
    };

    const deleteTipo = async (id) => {
      await API.deleteItem("http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/", id)
      setSnack(true);
      setTimeout(() => {
        setSnack(false);
        fetchTiposAlojamiento(); // Actualizar la lista de tipos de alojamiento
      }, 2000);
    };

    useEffect(() => {
      // Obtener datos cuando el componente se monta
      fetchTiposAlojamiento();
    }, []);
  
    return (
      <div className="admin">
        <div className="tablero">
          <h2 className="tituloTipos">Tipos de alojamientos</h2>
          <div className="contenedor-button">
            <button className="buttonNuevo" onClick={handleCreate}>
              +
            </button>
          </div>
          {/* Paso por props la lista de alojamiento cargada en la funcion fetchTiposAlojamiento, la funcion propia y una funcion para cambiar nombre de botón */}
          <TablaCrud
            registros={tiposAlojamiento}
            fetchTiposAlojamiento={fetchTiposAlojamiento}
            handleDelete={deleteTipo}
            handleShowUpdate={handleShowModal}
          />
        </div>
        <td className={snack ? "mostrarSnack" : "ocultarSnack"}>
        Tipo de alojamiento eliminado
      </td>
      <ModalTipos
        show={showModal}
        handleClose={handleCloseUpdate}
        fetchTiposAlojamiento={fetchTiposAlojamiento}
        id={IdMod}
        descrip={DescripMod}
      />
      </div>
    );
}

export default CrudTipos;