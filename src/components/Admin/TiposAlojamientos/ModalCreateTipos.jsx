import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';   
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function ModalCreateTipos({ show, handleClose, fetchTiposAlojamiento} ) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    
    //validacion del input
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
     
    // Si pasa validacion ejecutar accion
    if(validated){

      event.preventDefault();
      createTipoModal()
      console.log(descripcion);
      handleClose();
      fetchTiposAlojamiento();
    }
  };

  const [descripcion, setDescripcion] = useState("");

  //Control de validacion
  


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



        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formDescription">         
            <Form.Label>Descripción</Form.Label>
            <InputGroup hasValidation>  
            <Form.Control
              type="text"
              required
              placeholder="Ingresa una descripción"
              onChange={(e) => setDescripcion(e.target.value)}
            />
             <Form.Control.Feedback type="invalid">
                    Debe llenar este campo
            </Form.Control.Feedback>
            </InputGroup>
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
