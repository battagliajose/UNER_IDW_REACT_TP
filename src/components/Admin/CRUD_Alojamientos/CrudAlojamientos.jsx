import React, { useEffect, useState } from 'react'
import TablaCrud from '../TablaCrud'
import ModalAlojamientos from "./ModalAlojamientos";
import * as API from '../API'

function CrudAlojamientos() {
    const [alojamientos, setAlojamientos] = useState([]);
    const [dataTipos, setDataTipos] = useState([]);
    const [imagenes, setImagenes] = useState([]);
    const [servicios, setServicios] = useState([]);
    const [serviciosAloj, setServiciosAloj] = useState([]);

    const [snack, setSnack] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [objectMod, setObjectMod] = useState({});
    const [imagenMod, setImagenMod] = useState({});
    const [selectedServicios, setSelectedServicios] = useState([])

    const handleShowModal = (item) => {
        setShowModal(true);

        if (item.ID) { //Verifica si es una modificación o creación.
          // Se vuelve a modificar Tipo al ID en lugar de la descripción para el select del modal.
          const itemAModificar = { ...item };
          itemAModificar.Tipo = dataTipos.find(tipo => tipo.Descripcion === item.Tipo).idTipoAlojamiento;
          setObjectMod(itemAModificar);
          // Busca la imagen correspondiente al alojamiento a editar
          const imgAModificar = imagenes.find(imagen => imagen.idAlojamiento === item.ID)
          if (imgAModificar) setImagenMod(imgAModificar.RutaArchivo);
          // Busca los servicios del Alojamiento a editar
          const serviciosAlojActual = serviciosAloj.filter(servicio => servicio.idAlojamiento === item.ID)
          if (serviciosAlojActual) {
            setSelectedServicios(serviciosAlojActual)
          }
        } 
        else {
          setObjectMod(item);
        }
      };
    
    const handleCloseModal = async () => {
      setShowModal(false)
      setImagenMod(null);
      setSelectedServicios([]);
      await fetchData();
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

    const fetchServicios = async () => {
      const servicios = await API.fetchData("http://localhost:3001/servicio/getAllServicios");
      if (servicios) {
        setServicios(servicios)
      }
    }

    const fetchServiciosAloj = async () => {
      const serviciosAlojamientos = await API.fetchData("http://localhost:3001/alojamientosServicios/getallAlojamientoServicios");
       if (serviciosAlojamientos) {
         setServiciosAloj(serviciosAlojamientos);
      }
    }

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
      await fetchServicios();
      await fetchServiciosAloj();
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

    const deleteServicios = async (id) => {
      const serviciosAlojActual = serviciosAloj.filter(servicio => servicio.idAlojamiento === id)

      await serviciosAlojActual.map( (servicio) => {
        const response =  API.deleteItem("http://localhost:3001/alojamientosServicios/deleteAlojamientoServicio/", servicio.idAlojamientoServicio)
      })
    };

    const deleteAlojamiento = async (id) => {
        await deleteImageHandle(id);
        await deleteServicios(id);
        setTimeout(() => {
          API.deleteItem("http://localhost:3001/alojamiento/deleteAlojamiento/", id);
        }, 1000);
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
            <h2 className="tituloTipos">Alojamientos</h2>
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
            alojamientos = {alojamientos}
            item = {objectMod}
            imagen = {imagenMod}
            dataTipos = {dataTipos}
            dataServicios = {servicios}
            selectedServicios = {selectedServicios}
          />
        </div>
      );
}

export default CrudAlojamientos;
