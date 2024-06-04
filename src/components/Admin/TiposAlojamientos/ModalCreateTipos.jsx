import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "../../../styles/modales.css";

function ModalCreateTipos({ show, handleClose, fetchTiposAlojamiento }) {
  const [validated, setValidated] = useState(false);
  const [snack, setSnack] = useState(false);
  const handleSubmit = (event) => {
    //validacion del input
    const form = event.currentTarget;
    setValidated(false);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      event.preventDefault();
      createTipoModal();
      handleClose();
      fetchTiposAlojamiento();
      setSnack(true);

      // Oculto el snack después de 3 segundos
      setTimeout(() => {
        setSnack(false);
      }, 3000);
      setValidated(false);
    }
  };

  const [descripcion, setDescripcion] = useState("");

  const createTipoModal = async () => {
    const dataJson = {
      Descripcion: descripcion,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/tiposAlojamiento/createTipoAlojamiento",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataJson),
        }
      );
      if (response.ok) {
        fetchTiposAlojamiento();
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <Modal
        className="modal-blur"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="form-modal">
          <p>Tipo de alojamiento</p>
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
                <Button className="button-cancelar" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button className="button-Aceptar" onClick={handleSubmit}>
                  Aceptar
                </Button>
                <Form.Control.Feedback type="invalid">
                  Debe llenar este campo
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>

      <div className={snack ? "mostrarSnack" : "ocultarSnack"}>
        Tipo de alojamiento creado
      </div>
    </>
  );
}

export default ModalCreateTipos;
