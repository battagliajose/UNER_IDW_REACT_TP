import React, { useEffect, useState } from 'react'
import TablaCrud from '../TablaCrud'
import ModalAlojamientos from "./ModalAlojamientos";
import * as API from '../API'

function CrudAlojamientos() {
    const [alojamientos, setAlojamientos] = useState([])

    const [snack, setSnack] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [IdMod, setIdMod] = useState(0);
    const [DescripMod, setDescripMod] = useState("");
    const [objectMod, setObjectMod] = useState({})

    const handleShowModal = (item) => {
        setShowModal(true);
        setObjectMod(item);
        setIdMod(item.ID);
        setDescripMod(item.Título);
      };
    
    const handleCloseModal = () => setShowModal(false);

    const handleCreate = () => {
        const itemNuevo = {
            Título: ""
        }
        handleShowModal(itemNuevo);
    };

    const fetchAlojamientos = async () => {
        const dataAloj = await API.fetchData("http://localhost:3001/alojamiento/getAlojamientos");
        const dataTipos = await API.fetchData("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");
        if (dataAloj && dataTipos) {
            setAlojamientos(transformData(dataAloj, dataTipos));
        }
    };

    // Cambia los nombres de las columnas para presentarlos en la Tabla
    const transformData = (dataAloj, dataTipos) => {
        const dataProcesada = dataAloj.map(item => {
            const tipo = dataTipos.find(tipo => tipo.idTipoAlojamiento === item.idTipoAlojamiento);
            return {
                ID: item.idAlojamiento,
                Título: item.Titulo,
                Descripción: item.Descripcion,
                Latitud: item.Latitud,
                Longitud: item.Longitud,
                "Precio Por Día": item.PrecioPorDia,
                Dormitorios: item.CantidadDormitorios,
                Baños: item.CantidadBanios,
                Estado: item.Estado,
                Tipo: tipo ? tipo.Descripcion : 'Desconocido',
            };
        });

        return dataProcesada;
    };


    const deleteAlojamiento = async (id) => {
        API.deleteItem("http://localhost:3001/alojamiento/deleteAlojamiento/", id)
        setSnack(true);
        setTimeout(() => {
            setSnack(false);
            fetchAlojamientos(); // Actualizar la lista de tipos de alojamiento
        }, 2000);
    };

    useEffect(() => {
        // Obtener datos cuando el componente se monta
        fetchAlojamientos();
    }, []);

    return (
        <div className="admin">
          <div className="tablero">
            <h2 className="tituloTipos">CRUD de Alojamientos</h2>
            <div className="contenedor-button">
              <button className="buttonNuevo" onClick={handleCreate}>
                +
              </button>
            </div>
            <TablaCrud
                registros={alojamientos}
                handleDelete={deleteAlojamiento}
                handleShowUpdate={handleShowModal}
            />
          </div>
          <td className={snack ? "mostrarSnack" : "ocultarSnack"}>
            Tipo de alojamiento eliminado
          </td>
          <ModalAlojamientos
            show={showModal}
            handleClose={handleCloseModal}
            fetch={fetchAlojamientos}
            item = {objectMod}
            id={IdMod}
            descrip={DescripMod}
          />
        </div>
      );
}

export default CrudAlojamientos;
