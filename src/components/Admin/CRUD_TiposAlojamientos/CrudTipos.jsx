import React, {useState, useEffect} from "react";
import TablaCrud from "../TablaCrud";
import ModalTipos from "./ModalTipos";
import * as API from "../API";

function CrudTipos() {
    const [tiposAlojamiento, setTiposAlojamiento] = useState([]);

    const [snack, setSnack] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [IdMod, setIdMod] = useState(0);
    const [DescripMod, setDescripMod] = useState("");
  
    const handleShowModal = ({ ID, Descripción }) => {
      setShowModal(true);
      setIdMod(ID);
      setDescripMod(Descripción);
    };
    const handleCloseModal = () => setShowModal(false);
  
    const handleCreate = () => {
      const itemNuevo = {
        Descripcion: ""
      }
      handleShowModal(itemNuevo);
    };

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
        fetchTiposAlojamiento(); // Actualizar la lista de tipos de tipos
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
          <TablaCrud
            registros={tiposAlojamiento}
            handleDelete={deleteTipo}
            handleShowUpdate={handleShowModal}
          />
        </div>
        <td className={snack ? "mostrarSnack" : "ocultarSnack"}>
          Tipo de alojamiento eliminado
        </td>
        <ModalTipos
          show={showModal}
          handleClose={handleCloseModal}
          fetch={fetchTiposAlojamiento}
          id={IdMod}
          descrip={DescripMod}
        />
      </div>
    );
}

export default CrudTipos;