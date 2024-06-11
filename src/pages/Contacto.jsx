
import "../styles/contacto.css";
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';

function Contacto() {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('alojamiento-react', 'template_k5noc5j', form.current, {
      publicKey: 'ZwG3Oiy8kRlehl4ZQ',
    })
    .then(
      () => {
        console.log('Email enviado!');

      },
      (error) => {
        console.log('Fallo al enviar mail...', error.text);
      },
    );
};

  return (
    <section className="contenedor-form">
      <h3 className="contacto">Contactanos</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6 formulario-form">           
        <Form ref={form} onSubmit={sendEmail} className={{width: "26rem"}}>
        <Form.Group controlId="formNombre" className="mt-3 form-label">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce tu nombre"
            name='user_name'                        
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3 form-label">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduce tu email"
            name="email"                      
          />
        </Form.Group>
        <Form.Label className="mt-4">Mensaje</Form.Label>
        <textarea 
                  placeholder="Dejanos tu consulta y te contactaremos!"
                  className="form-outline texto"
                  id="formContacto3"
                  rows="10"
                  name='message'
                ></textarea>

        <Button type="submit" className="button-formulario">
          Enviar
        </Button>
      </Form>
          </div>
          <div className="col-md-6 formulario-mapa">
            <iframe
              title="mapa"
              className="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.573949099506!2d-58.23386162361339!3d-32.48408564867756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b45287c99b3d6f%3A0x217ff14d6a8196ff!2sUniversidad%20Nacional%20de%20Entre%20Rios!5e0!3m2!1ses!2sar!4v1714588429597!5m2!1ses!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="row texto-formulario">
            <div className="col">
              <p className="text-fin">
                ¡Gracias por ponerte en contacto con nosotros! En HotelFlix,
                estamos comprometidos a brindarte la mejor experiencia posible
                al registrar tus alojamientos. Ya sea que tengas una casa de
                vacaciones, un apartamento acogedor o una habitación extra,
                estamos aquí para ayudarte a compartir tu espacio con viajeros
                de todo el mundo. Nuestro equipo está listo para responder tus
                preguntas, ofrecerte asistencia técnica o simplemente escuchar
                tus comentarios. Valoramos tu tiempo y tu confianza en nosotros.
                Por favor, completa el siguiente formulario y nos pondremos en
                contacto contigo lo antes posible. ¡Esperamos colaborar contigo
                para hacer que tu experiencia de alojamiento sea excepcional!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
