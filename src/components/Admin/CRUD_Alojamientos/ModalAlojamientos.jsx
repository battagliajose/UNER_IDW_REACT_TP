import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import * as API from '../API';
import '../../../styles/modales.css';

function ModalAlojamientos({ show, handleClose, fetchDatos, item, imagen, dataTipos, deleteImageHandle }) {
  const [validated, setValidated] = useState(false);
  const [snack, setSnack] = useState(false);

  const descripcionRef = useRef(null);

  const [titulo, setTitulo] = useState(item.Título);
  const [descripcion, setDescripcion] = useState(item.Descripción);
  const [latitud, setLatitud] = useState(item.Latitud);
  const [longitud, setLongitud] = useState(item.Longitud);
  const [precio, setPrecio] = useState(item["Precio Por Día"]);
  const [dormitorios, setDormitorios] = useState(item.Dormitorios);
  const [banios, setBanios] = useState(item.Baños);
  const [tipo, setTipo] = useState(item.Tipo);
  const [estado, setEstado] = useState(item.Estado);

  const [imgAloj, setImgAloj] = useState("");
  const [imgFile, setImgFile] = useState("");

  var create = false;

  if (!item.ID) { create = true; } //Verifica si recibe ID de un regisro a modificar o sino es un registro nuevo.

  useEffect(() => {
    // Actualiza el estado de descripción con el valor de descrip cuando el componente se monta o cuando descrip cambia
    setDescripcion(item.Descripción); // Si no a la descripción
    setTitulo(item.Título);
    setLatitud(item.Latitud);
    setLongitud(item.Longitud);
    setPrecio(item["Precio Por Día"]);
    setDormitorios(item.Dormitorios);
    setBanios(item.Baños);
    setTipo(item.Tipo);
    setEstado(item.Estado);
    setImgAloj(imagen);
  }, [item, create]);

  useEffect(() => {
    // Enfoca el campo de texto cuando el modal se muestra
    if (show) {
      descripcionRef.current.focus();
    }
  }, [show]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      event.preventDefault();
      submitItem();
      handleImageUpload();
      handleClose();
      fetchDatos();
      setValidated(false);
    }
  };

  const submitItem = async () => {
    const submitItem = create
      ? {
        "Titulo": titulo,
        "Descripcion": descripcion,
        "idTipoAlojamiento": tipo,
        "Latitud": latitud,
        "Longitud": longitud,
        "PrecioPorDia": precio,
        "CantidadDormitorios": dormitorios,
        "CantidadBanios": banios,
        "Estado": estado,
      } : {
        "idAlojamiento": item.ID,
        "Titulo": titulo,
        "Descripcion": descripcion,
        "idTipoAlojamiento": tipo,
        "Latitud": latitud,
        "Longitud": longitud,
        "PrecioPorDia": precio,
        "CantidadDormitorios": dormitorios,
        "CantidadBanios": banios,
        "Estado": estado,
      }
    try {
      var response = "";
      if (create) {
        response = await API.createItem(submitItem, "http://localhost:3001/alojamiento/createAlojamiento");
      } else {
        response = await API.updateItem(submitItem, "http://localhost:3001/alojamiento/putAlojamiento/")
      }

      if (response.ok) {
        fetchDatos();
        setSnack(true);
        setTimeout(() => {
          setSnack(false);
        }, 2000);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const deleteImage = async (id) => {
    await deleteImageHandle(id);
    setImgAloj(null);
  }

  const handleImageSelected = (e) => {
    const file = e.target.files[0];
    setImgAloj(URL.createObjectURL(file));
    setImgFile(file);
  }

  const handleImageUpload = async () => {

    deleteImageHandle(item.ID);

    const formData = new FormData();
    formData.append('image', imgFile);

    try {
      const response = await fetch('https://api.imgbb.com/1/upload?key=8ae73ed418d9c5b532e34d98e047fd64', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      //setImgAloj(data.data.url);
      const submitItem = {
        "idAlojamiento": item.ID,
        "RutaArchivo": imgAloj
      }

      API.createItem(submitItem, 'http://localhost:3001/imagen/createImagen');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <>
      <Modal className='modal-lg modal-blur' show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className='form-modal'>
          <p>Tipo de alojamiento</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/*<Form.Label>ID: {item.ID}</Form.Label>*/}
            <div className='formContainer'>
              <div className='leftColumn'>
                <Form.Group controlId="formDescription">
                  <Form.Label>Título</Form.Label>
                  <InputGroup className='inputGroup flexColumn' hasValidation>
                    <Form.Control
                      ref={descripcionRef}
                      value={titulo}
                      type="text"
                      required
                      placeholder="Ingresa un título"
                      onChange={(e) => setTitulo(e.target.value)}
                    />
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      value={descripcion}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <div className='flexRow'>
                      <div className='flexItem'>
                        <Form.Label>Latitud</Form.Label>
                        <Form.Control
                          value={latitud}
                          type="text"
                          required
                          placeholder="Ingresa la latitud"
                          onChange={(e) => setLatitud(e.target.value)}
                        />
                      </div>
                      <div className='flexItem'>
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control
                          value={longitud}
                          type="text"
                          required
                          placeholder="Ingresa la longitud"
                          onChange={(e) => setLongitud(e.target.value)}
                        />
                      </div>
                    </div>
                    <Form.Label>Precio por Día</Form.Label>
                    <Form.Control
                      value={precio}
                      type="text"
                      required
                      placeholder="Ingresa el precio por día"
                      onChange={(e) => setPrecio(e.target.value)}
                    />
                    <div className='flexRow'>
                      <div className='flexItem'>
                        <Form.Label>Dormitorios</Form.Label>
                        <Form.Control
                          value={dormitorios}
                          type="text"
                          required
                          placeholder="Ingresa la cantidad de dormitorios"
                          onChange={(e) => setDormitorios(e.target.value)}
                        />
                      </div>
                      <div className='flexItem'>
                        <Form.Label>Baños</Form.Label>
                        <Form.Control
                          value={banios}
                          type="text"
                          required
                          placeholder="Ingresa la cantidad de baños"
                          onChange={(e) => setBanios(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='flexRow'>
                      <div className='flexItem'>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Select
                          value={tipo}
                          required
                          onChange={(e) => setTipo(e.target.value)}
                        >
                          {dataTipos.map((tipo) => (
                            <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>{tipo.Descripcion}</option>
                          ))}
                        </Form.Select>
                      </div>
                      <div className='flexItem'>
                        <Form.Label>Disponibilidad</Form.Label>
                        <Form.Select
                          value={estado}
                          required
                          onChange={(e) => setEstado(e.target.value)}
                        >
                          <option value="Disponible">Disponible</option>
                          <option value="Reservado">Reservado</option>
                        </Form.Select>
                      </div>
                    </div>
                    <Form.Control.Feedback type="invalid">Debe llenar este campo</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </div>
              <div className='rightColumn'>
                <Form.Group controlId="formImage">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelected}
                  />
                </Form.Group>
                {imgAloj === null ? <p>Sin Imagen</p> : <img className="imgModal" src={imgAloj} alt="IMAGENACTUAL" />}
                <Button className='btn btn-danger' onClick={() => { deleteImage(item.ID) }}>X</Button>
              </div>
            </div>
            <div className='modal__botones'>
              <Button className='btn btn-danger button-cancelar' onClick={handleClose}>Cancelar</Button>
              <Button className='btn btn-danger button-aceptar' type="submit">Aceptar</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>




      <div className={snack ? 'mostrarSnack' : 'ocultarSnack'}>Alojamiento editado</div>
    </>
  );
}

export default ModalAlojamientos;
