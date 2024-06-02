import React from "react";
import '../styles/contacto.css'


function Contacto() {
  return (
    <section className="contenedor-form">
      <h3 className="contacto">Contactanos</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6 formulario-form">
            <form style={{ width: "26rem" }}>
              {/* Name input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="formContacto1">Nombre</label>
                <input type="text" placeholder="Como te llamas?" id="formContacto1" className="form-control" />
              </div>

              {/* Email input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="formContacto2">Email</label>
                <input type="email" placeholder="Donde te escribimos?" id="formContacto2" className="form-control" />
              </div>

              {/* Message input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="formContacto3">Mensaje</label>
                <textarea placeholder="Dejanos tu consulta y te contactaremos!" className="form-control" id="formContacto3" rows="6"></textarea>
              </div>

              {/* Submit button */}
              <button type="button" className="button-formulario btn-block mb-4">Enviar</button>
            </form>
          </div>
          <div className="col-md-6 formulario-mapa">
            <iframe
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
                ¡Gracias por ponerte en contacto con nosotros! En HotelFlix, estamos comprometidos a brindarte la mejor experiencia posible al registrar tus alojamientos.
                Ya sea que tengas una casa de vacaciones, un apartamento acogedor o una habitación extra, estamos aquí para ayudarte a compartir tu espacio con viajeros de todo el mundo.
                Nuestro equipo está listo para responder tus preguntas, ofrecerte asistencia técnica o simplemente escuchar tus comentarios. Valoramos tu tiempo y tu confianza en nosotros.
                Por favor, completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
                ¡Esperamos colaborar contigo para hacer que tu experiencia de alojamiento sea excepcional!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
