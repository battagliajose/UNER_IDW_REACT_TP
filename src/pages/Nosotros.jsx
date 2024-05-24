import React from "react";
import '../styles/nosotros.css';
import imagenPrincipal from '../assets/nosotros/friends-traveling-getting-ready-for-train-shutterstock-032822.jpg';
import testimonio1 from '../assets/nosotros/Testimonio1.jpg';
import testimonio2 from '../assets/nosotros/Testimonio2.jpg';
import testimonio3 from '../assets/nosotros/Testimonio3.jpg';
import testimonio4 from '../assets/nosotros/Testimonio4.jpg';
import testimonio6 from '../assets/nosotros/Testimonio6.jpg';


function Nosotros(props){
    return (
        <div className="nosotros">
            {/*<!-- -------------Sección1 contenido de imagen------------- -->*/}
            <section>
                <img className ="imagenPrincipal" src={imagenPrincipal} alt="Nosotros" />
            </section>

            {/*<!-- --------------Sección 2 sobre nosotros---------------- -->*/}
            <section className="containerNos sobreNosotros"> 
                <h2>SOBRE NOSOTROS</h2> {/*<!-- Subtítulo -->*/}
                <p><span className="resaltado">HotelFlix </span> es una plataforma digital de alojamiento temporal creada por emprendedores entrerrianos  y José Ontiveros a fines del 2020, y a pasado de ser una pequeña empresa a convertirse en una de la empresas de viajes digitales más importantes del mundo.</p>
                <p> A poco más de 3 años de su lanzamiento, esta red cuenta con más de <span className="resaltado">5 millones anfitriones registrados </span> que la utilizan para planificar sus estadías, ya sea para vacaciones o para viajes por trabajo.</p>
                <p>A través de <span className="resaltado">HotelFlix</span> actualmente se pueden encontrar más de <span className="resaltado">28 millones</span> de opciones alojamientos disponibles, entre casas y departamentos y otro alojamientos únicos en distintos puntos del mundo: Argentina, Brasil, Barcelona, Japón ...</p>
            </section>

            <div className="containerNos">
                <section className = "misionVision"> 
                    {/*<!-- --------------Sección 3 contenido de misión---------------- -->*/}
                    <div className = "mision">
                        <h2>MISIÓN</h2> {/*<!-- Subtítulo -->*/}
                        <p>Nuestra misión es democratizar el turismo facilitando la conexión entre propietarios y huéspedes en un medio digital seguro, sin importar su origen o destino.</p>
                    </div>

                    {/*<!-- --------------Sección 4 contenido de visión---------------- -->*/}
                    <div className = "vision">
                        <h2>VISIÓN</h2> {/*<!-- Subtítulo -->*/}
                        <p>En <span className="resaltado">HotelFlix</span>, nuestra visión es mantenernos como la opción preferida a nivel mundial en el sector de alojamiento temporal. Nos comprometemos a seguir ofreciendo la mayor variedad de opciones y los precios más competitivos, mientras mantenemos nuestro enfoque en la excelencia en el servicio al cliente y la innovación tecnológica. Queremos seguir siendo la elección número uno para quienes buscan una experiencia de viaje única y sin complicaciones.</p>
                    </div>
                </section>
            </div>

            {/*<!-- --------------Sección 5 contenido servicios que ofrece---------------- -->*/}
            <section className="containerNos"> 
                <div>
                    <h2>¿ QUÉ OFRECE HotelFlix ?</h2> {/*<!-- Subtítulo -->*/}
                </div>

                    <div> {/*<!-- Lista de servicios -->*/}
                        <ul >
                            <li><span className="resaltado">Alojamiento variado, Departamentos, Casa, Cabañas, Hotel y mucho más.</span></li>
                            <li><span className="resaltado">Precios Bajos.</span></li>
                            <li><span className="resaltado">Confirmación inmediata.</span></li>
                            <li><span className="resaltado">Sin cargos de reserva.</span></li>
                            <li><span className="resaltado">Reserva segura. Consulta nuestra Política de privacidad. </span></li>
                            <li><span className="resaltado">Ayuda las 24 hs, todos los días. Echa un vistazo en Preguntas frecuentes. </span></li>
                        </ul>
                    </div>
                    <br />
            </section>
        
            
            {/*<!-- --------------Sección 6 contenido de testimonios---------------- -->*/}
            <section className="containerNos"> 
                <h2>TESTIMONIOS</h2> {/*<!-- Subtítulo -->*/}
                <div className="comentarios">
                    <div className="comentario">
                        <img className="fotoTestimonio" src={testimonio1} alt="fotoTestimonio" />
                        <p>"¡Excelente servicio! Nos alojamos en una hermosa casa en Italia gracias a <span className="resaltado">HotelFlix</span>. ¡Altamente recomendado!"<br /><br /><span className="resaltado">- Juan Pérez -</span></p>
                    </div>
                    <div className="comentario">
                        <img className="fotoTestimonio" src={testimonio3} alt="fotoTestimonio" />
                        <p>"Reservé un departamento en Río de Janeiro y fue una experiencia maravillosa. Sin duda volveré a utilizar <span className="resaltado">HotelFlix</span> en mis próximos viajes."<br /><br /><span className="resaltado">- María González -</span></p>
                    </div>
                    <div className="comentario">
                        <img className="fotoTestimonio" src={testimonio4} alt="fotoTestimonio" />
                        <p>"Gracias a <span className="resaltado">HotelFlix</span> pude encontrar un alojamiento perfecto para mis vacaciones en Argentina. ¡Increíble servicio!"<br /><br /><span className="resaltado">- Roberto Fernández-</span></p>
                    </div>
                    <div className="comentario">
                        <img className="fotoTestimonio" src={testimonio2} alt="fotoTestimonio" />
                        <p>"Excelente plataforma para buscar alojamiento. Encontré un hotel en Barcelona con una ubicación perfecta y a un precio increíble. ¡Muy recomendable!"<br /><br /><span className="resaltado">- Ana López-</span></p>
                    </div>
                    <div className="comentario">
                        <img className="fotoTestimonio" src={testimonio6} alt="fotoTestimonio" />
                        <p>"<span className="resaltado">HotelFlix</span> me salvó en mi último viaje de negocios. Encontré un departamento en Miami con todas las comodidades que necesitaba. ¡Volveré a usarlo!"<br /><br /><span className="resaltado">-Carlos Rodríguez-</span></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Nosotros;