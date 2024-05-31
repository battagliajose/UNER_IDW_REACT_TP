import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalCreateTipos({ show, handleClose, fetchTiposAlojamiento} ) {

  const handleSubmit = (event) => {
    event.preventDefault();
    createTipoModal()
    console.log(descripcion);
    handleClose();
    fetchTiposAlojamiento();
  };

  const [descripcion, setDescripcion] = useState("");

  const createTipoModal = async () => { 

    const dataJson = {
        Descripcion: descripcion
    };

    try {
        const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJson)
        });
        if(response.ok){
            alert('Tipo alojamiento creado');
            fetchTiposAlojamiento()
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }

};

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ingresar Descripción</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa una descripción"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCreateTipos;
