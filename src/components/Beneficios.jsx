import '../styles/beneficios.css'
import '../styles/seccion3.css'
import React from 'react'

const socialIcons = [
    { id: 1, className: "bi bi-building-fill icon-style-pers" },
    { id: 2, className: "bi bi-car-front-fill icon-style-pers" },
    { id: 3, className: "bi bi-airplane-fill icon-style-pers" },
    { id: 4, className: "bi bi-bus-front-fill icon-style-pers" },
    { id: 5, className: "bi bi-suitcase2-fill icon-style-pers" },
    { id: 6, className: "bi bi-brightness-alt-high-fill icon-style-pers" },
    { id: 7, className: "bi bi-camera-fill icon-style-pers" },
    { id: 8, className: "bi bi-train-freight-front-fill icon-style-pers" },
    { id: 9, className: "bi bi-compass icon-style-pers" },
    { id: 10, className: "bi bi-passport icon-style-pers" }
];


const Beneficios = () => {
    return (

        <section className="beneficios">
            <div className="container bg-dark text-white pb-3">
                <div className="row">
                    <div className="col-md justify-content-start align-items-center">
                        <h2>Millones de opciones para tus <span className="rojito">vacaciones inolvidables</span> alrededor del mundo!</h2>
                        <p>Descubre la comodidad de nuestros alojamientos vacacionales.</p>
                    </div>
                    <div className="col-md justify-content-start align-items-center">
                        <p>Disfruta de servicios excepcionales, ubicaciones privilegiadas y las mejores tarifas.</p>
                        <p><strong>¡Reserva ahora para una <span className="rojito">experiencia única</span>!</strong></p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center container-beneficios">
                        <div className="d-flex justify-content-center">
                            
                                {socialIcons.map(icon => (
                                    <div className="square-container" key={icon.id}>
                                        <i className={icon.className}></i>
                                    </div>
                                ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Beneficios