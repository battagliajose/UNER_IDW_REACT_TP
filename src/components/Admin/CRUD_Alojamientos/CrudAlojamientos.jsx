import React, { useEffect, useState } from 'react'
import TablaCrud from '../TablaCrud'
import ModalAlojamientos from "./ModalAlojamientos";
import * as API from '../API'

function CrudAlojamientos() {
    const [alojamientos, setAlojamientos] = useState([]);
    const [dataTipos, setDataTipos] = useState([]);
    const [imagenes, setImagenes] = useState([]);

    const [snack, setSnack] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [objectMod, setObjectMod] = useState({});
    const [imagenMod, setImagenMod] = useState({});

    const handleShowModal = (item) => {
        setShowModal(true);

        if (item.ID) { //Verifica si es una modificación o creación.
          // Se vuelve a modificar Tipo al ID en lugar de la descripción para el select del modal.
          const itemAModificar = { ...item };
          itemAModificar.Tipo = dataTipos.find(tipo => tipo.Descripcion === item.Tipo).idTipoAlojamiento;
          setObjectMod(itemAModificar);
          const imgAModificar = imagenes.find(imagen => imagen.idAlojamiento === item.ID)
          if (imgAModificar) setImagenMod(imgAModificar.RutaArchivo);
        } 
        else {
          setObjectMod(item);
        }
      };
    
    const handleCloseModal = () => {
      setShowModal(false)
      setImagenMod(null);
      fetchData();
    };

    const handleCreate = () => {
      const itemNuevo = {
            Título: "",
            Descripción: "",
            Latitud: 0.00,
            Longitud: 0.00,
            Precio: 0,
            Dormitorios: 1,
            "Precio Por Día": 0,
            Baños: 1,
            Tipo: dataTipos[0].idTipoAlojamiento, // Selecciona por defecto el primer tipo de alojamiento.
            Estado: "Reservado"
        }
      handleShowModal(itemNuevo);
    };

    const fetchDataTipos = async () => {
      const tipos = await API.fetchData("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");
      setDataTipos(tipos);
      return tipos;
    };

    const fetchAlojamientos = async (tipos) => {
        const dataAloj = await API.fetchData("http://localhost:3001/alojamiento/getAlojamientos");
        if (dataAloj && tipos && tipos.length > 0) {
            setAlojamientos(transformData(dataAloj, tipos));
        }
    };

    const fetchImagenes = async () => {
      const imagenes = await API.fetchData("http://localhost:3001/imagen/getAllImagenes");
      if (imagenes) {
        setImagenes(imagenes);
      }
    };

    const deleteImageHandle = async(id) => {
        const imgAEliminar = imagenes.find(imagen => imagen.idAlojamiento === id); // Se elimina imagen por clave foranea
        if (imgAEliminar) {
         const response = await API.deleteItem("http://localhost:3001/imagen/deleteImagen/", imgAEliminar.idImagen)
        }
    }

    const fetchData = async () => {  
      const tipos = await fetchDataTipos();
      await fetchAlojamientos(tipos);
      await fetchImagenes();
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
                Tipo: tipo ? tipo.Descripcion : 'Desconocido'
            };
        });
        return dataProcesada;
    };

    const deleteAlojamiento = async (id) => {
        await deleteImageHandle(id);
        API.deleteItem("http://localhost:3001/alojamiento/deleteAlojamiento/", id);
        setSnack(true);
        setTimeout(() => {
            setSnack(false);
            fetchData(); // Actualizar la lista de tipos de alojamiento
        }, 2000);
    };

    useEffect(() => {
      // Obtener datos cuando el componente se monta
      fetchData();      
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
            Alojamiento eliminado
          </td>
          <ModalAlojamientos
            show={showModal}
            handleClose={handleCloseModal}
            fetchDatos={fetchData}
            deleteImageHandle={deleteImageHandle}
            item = {objectMod}
            imagen = {imagenMod}
            dataTipos = {dataTipos}
          />
        </div>
      );
}

export default CrudAlojamientos;
