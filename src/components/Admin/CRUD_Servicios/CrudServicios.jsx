import React, {useState, useEffect} from "react";
import TablaCrud from "../TablaCrud";
import ModalServicios from "./ModalServicios";
import * as API from "../API";

function CrudServicios() {
    const [Servicios, setServicios] = useState([]);
    const [showModalCreate, setShowModalCreate] = useState(false);

    const [snack, setSnack] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [IdMod, setIdMod] = useState(0);
    const [DescripMod, setDescripMod] = useState("");
  
    const handleShowModal = ({ ID: idServicio, Descripción: Descripcion }) => {
      setShowModal(true);
      setIdMod(idServicio);
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
    const fetchServicios = async () => {
      const data = await API.fetchData("http://localhost:3001/servicio/getAllServicios");
      if (data) {
        setServicios(transformData(data));
      }
    };

    // Cambia los nombres de las columnas para presentarlos en la Tabla
    const transformData = (data) => {
      console.log(data);
      return data.map(item => ({
        ID: item.idServicio,
        Descripción: item.Nombre
      }));
    };

    const deleteTipo = async (id) => {
      await API.deleteItem("http://localhost:3001/servicio/deleteServicio/", id)
      setSnack(true);
      setTimeout(() => {
        setSnack(false);
        fetchServicios(); // Actualizar la lista de tipos de alojamiento
      }, 2000);
    };

    useEffect(() => {
      // Obtener datos cuando el componente se monta
      fetchServicios();
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
            registros={Servicios}
            fetchTiposAlojamiento={fetchServicios}
            handleDelete={deleteTipo}
            handleShowUpdate={handleShowModal}
          />
        </div>
        <td className={snack ? "mostrarSnack" : "ocultarSnack"}>
        Servicio eliminado
      </td>
      <ModalServicios
        show={showModal}
        handleClose={handleCloseUpdate}
        fetchTiposAlojamiento={fetchServicios}
        id={IdMod}
        descrip={DescripMod}
      />
      </div>
    );
}

export default CrudServicios;