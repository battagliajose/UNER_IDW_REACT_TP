import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import * as API from '../API';
import '../../../styles/modales.css';

function ModalServicios({ show, handleClose, fetch, item}) {
  const [validated, setValidated] = useState(false);
  const [snack, setSnack] = useState(false);
  const [descripcion, setDescripcion] = useState(""); // Inicializa descripción vacía
  const descripcionRef = useRef(null);

  var create = false;

  if (!item.id) {create = true;} //Verifica si recibe ID de un regisro a modificar o sino es un registro nuevo.

  useEffect(() => {
    // Actualiza el estado de descripción con el valor de descrip cuando el componente se monta o cuando descrip cambia
    if (create) {
      setDescripcion(""); // Si es uno nuevo lo setea a vacio
    } else {
      setDescripcion(item.Descripción); // Si no a la descripción
    }
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
      handleClose();
      fetch();
      setValidated(false);
    }
  };

  const submitItem = async () => {
    const item = create 
    ? { Nombre: item.Descripción } 
    : { idServicio: item.ID, Nombre: item.Descripción };

    try {
      var response = "";
      if (create) {
        response = await API.createItem(item, "http://localhost:3001/servicio/createServicio");
      } else {
        response = await API.updateItem(item, "http://localhost:3001/servicio/updateServicio/")
      }

      if (response.ok) {
        fetch();
        setSnack(true);
        setTimeout(() => {
          setSnack(false);
        }, 2000);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <>
      <Modal className='modal-blur' show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className='form-modal'>
          <p>Tipo de alojamiento</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Label>ID: {item.ID}</Form.Label>
            <Form.Group controlId="formDescription">
              
              <Form.Label>Título</Form.Label>
              <InputGroup className='inputGroup flexColumn' hasValidation>
                <Form.Control
                  ref={descripcionRef}
                  value={item.Título}
                  type="text"
                  required
                  placeholder="Ingresa una descripción"
                  onChange={(e) => setDescripcion(e.target.value)}
                />
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  value={item.Descripción}
                  type="text"
                  required
                  placeholder="Ingresa una descripción"
                  onChange={(e) => setDescripcion(e.target.value)}
                />
                <div className='flexRow'>
                  <div>
                    <Form.Label>Latitud</Form.Label>
                    <Form.Control
                      value={item.Latitud}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>
                  <div>
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control
                      value={item.Longitud}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flexRow'>
                  <div>
                    <Form.Label>Precio por Día</Form.Label>
                    <Form.Control
                      value={item.Precio}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>
                  <div>
                    <Form.Label>Dormitorios</Form.Label>
                    <Form.Control
                      value={item.Dormitorios}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>
                  <div>
                    <Form.Label>Baños</Form.Label>
                    <Form.Control
                      value={item.Baños}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flexRow'>
                  <div>
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control
                      value={item.Tipo}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>
                  <div>
                    <Form.Label>Disponibilidad</Form.Label>
                    <Form.Select
                      ref={descripcionRef}
                      value={item.Estado}
                      required
                      onChange={(e) => setDescripcion(e.target.value)}
                    >
                      <option value="Disponible">Disponible</option>
                      <option value="Reservado">Reservado</option>
                    </Form.Select>
                  </div>
                </div>
                <div>
                  <Button className='button-cancelar' onClick={handleClose}>Cancelar</Button>
                  <Button className='button-Aceptar' onClick={handleSubmit}>Aceptar</Button>
                </div>
                <Form.Control.Feedback type="invalid">Debe llenar este campo</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <div className={snack? 'mostrarSnack' : 'ocultarSnack'}>Servicio editado</div>
    </>
  );
}

export default ModalServicios;
