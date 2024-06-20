import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import * as API from '../API';
import '../../../styles/modales.css';

function ModalAlojamientos({ show, handleClose, fetch, item, dataTipos}) {
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

  
  var create = false;
  
  if (!item.ID) {create = true;} //Verifica si recibe ID de un regisro a modificar o sino es un registro nuevo.
  
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
  }, [item, create]);
  
  useEffect(() => {
    // Enfoca el campo de texto cuando el modal se muestra
    if (show) {
      descripcionRef.current.focus();
    }
  }, [show]);
  
  // Todo imagen
  const [image, setImage] = useState(0);  // Nuevo estado para la imagen
  const [imageUrl, setImageUrl] = useState('');  // Nuevo estado para la URL de la imagen subida

//   const handleImageChange = (event) => {  
//   const file = event.target.files[0];
//   console.log("La paso el valor con el setFile" ,file);
//   setImage(file);  
//   console.log("Mi imagen ",image);

// };

const uploadImage = async (e) => {
  e.preventDefault();
  if (!image) {
    alert('Por favor, selecciona una imagen primero.');
    return;
  }
  console.log('La imagen que le voy a pasar', image);
  const apibb = "https://api.imgbb.com/1/upload?key=b2ecec4761e2107581a1f3c3d1baf7f0&name=${image.name}";
  const formData = new FormData();
  formData.append("image", image);

  try {
  const response = await fetch(apibb, {
    method: 'POST',
    body: formData 
    });
    
    const data = await response.json();
    if (data.success) {
      setImageUrl(data.data.url);
      alert('Subio.');
    } else {
      alert('No subio.');
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
};
//Fin Imagen




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
      "ImageUrl": imageUrl // Añadir la URL de la imagen subida
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
      "ImageUrl": imageUrl // Añadir la URL de la imagen subida
    }
    try {
      var response = "";
      if (create) {
        response = await API.createItem(submitItem, "http://localhost:3001/alojamiento/createAlojamiento");
      } else {
        response = await API.updateItem(submitItem, "http://localhost:3001/alojamiento/putAlojamiento/")
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
                  value={titulo}
                  type="text"
                  required
                  placeholder="Ingresa una descripción"
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
                  <div>
                    <Form.Label>Latitud</Form.Label>
                    <Form.Control
                      value={latitud}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setLatitud(e.target.value)}
                    />
                  </div>
                  <div>
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control
                      value={longitud}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setLongitud(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flexRow'>
                  <div>
                    <Form.Label>Precio por Día</Form.Label>
                    <Form.Control
                      value={precio}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setPrecio(e.target.value)}
                    />
                  </div>
                  <div>
                    <Form.Label>Dormitorios</Form.Label>
                    <Form.Control
                      value={dormitorios}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setDormitorios(e.target.value)}
                    />
                  </div>
                  <div>
                    <Form.Label>Baños</Form.Label>
                    <Form.Control
                      value={banios}
                      type="text"
                      required
                      placeholder="Ingresa una descripción"
                      onChange={(e) => setBanios(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flexRow'>
                  <div>
                    <Form.Label>Tipo</Form.Label>
                    <Form.Select
                      value={tipo}
                      required
                      onChange={(e) => setTipo(e.target.value)}
                    >
                      {dataTipos.map((tipo) => (<option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>{tipo.Descripcion}</option>))}
                    </Form.Select>
                    
                  </div>
                  <div>
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
                  <div>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={e=> setImage(e.target.files[0])}
                    />
                    <Button className='button-upload' onClick={uploadImage}>Subir Imagen</Button>
                  </div>
                </div>
                <div className='modal__botones'>
                  <Button className='button-cancelar' onClick={handleClose}>Cancelar</Button>
                  <Button className='button-Aceptar' onClick={handleSubmit}>Aceptar</Button>
                </div>
                <Form.Control.Feedback type="invalid">Debe llenar este campo</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <div className={snack? 'mostrarSnack' : 'ocultarSnack'}>Alojamiento editado</div>
    </>
  );
}

export default ModalAlojamientos;