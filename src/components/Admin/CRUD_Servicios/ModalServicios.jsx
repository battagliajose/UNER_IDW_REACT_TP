import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import * as API from '../API';
import '../../../styles/modales.css';

function ModalServicios({ show, handleClose, fetchDatos, id, descrip }) {
  const [validated, setValidated] = useState(false);
  const [snack, setSnack] = useState(false);
  const [descripcion, setDescripcion] = useState(""); // Inicializa descripción vacía
  const descripcionRef = useRef(null);

  var create = false;

  if (!id) { create = true; } //Verifica si recibe ID de un regisro a modificar o sino es un registro nuevo.

  useEffect(() => {
    // Actualiza el estado de descripción con el valor de descrip cuando el componente se monta o cuando descrip cambia
    if (create) {
      setDescripcion(""); // Si es uno nuevo lo setea a vacio
    } else {
      setDescripcion(descrip); // Si no a la descripción
    }
  }, [descrip, create]);

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
      fetchDatos();
      setValidated(false);
    }
  };

  const submitItem = async () => {
    const item = create
      ? { Nombre: descripcion }
      : { idServicio: id, Nombre: descripcion };

    try {
      var response = "";
      if (create) {
        response = await API.createItem(item, "http://localhost:3001/servicio/createServicio");
      } else {
        response = await API.updateItem(item, "http://localhost:3001/servicio/updateServicio/")
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

  return (
    <>
      <Modal className='modal-blur' show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className='form-modal'>
          <p>Tipo de alojamiento</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  ref={descripcionRef}
                  value={descripcion}
                  type="text"
                  required
                  placeholder="Ingresa una descripción"
                  onChange={(e) => setDescripcion(e.target.value)}
                />
                <div className='modal__botones'>
                  <Button className='btn btn-danger button-cancelar' onClick={handleClose}>Cancelar</Button>
                  <Button className='btn btn-danger button-aceptar' type="submit">Aceptar</Button>
                </div>                
                <Form.Control.Feedback type="invalid">Debe llenar este campo</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <div className={snack ? 'mostrarSnack' : 'ocultarSnack'}>Servicio editado</div>
    </>
  );
}

export default ModalServicios;
