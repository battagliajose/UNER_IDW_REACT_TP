import '../styles/beneficios.css'
import '../styles/seccion3.css'
import React from 'react'

const Beneficios = () => {
    return (

        <section class="beneficios">
            <div class="container bg-dark text-white pb-3">
                <div class="row">
                    <div class="col-md justify-content-start align-items-center">
                        <h2>Millones de opciones para tus <span class="rojito">vacaciones inolvidables</span> alrededor del mundo!</h2>
                        <p>Descubre la comodidad de nuestros alojamientos vacacionales.</p>
                    </div>
                    <div class="col-md justify-content-start align-items-center">
                        <p>Disfruta de servicios excepcionales, ubicaciones privilegiadas y las mejores tarifas.</p>
                        <p><strong>¡Reserva ahora para una <span class="rojito">experiencia única</span>!</strong></p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center container-beneficios">
                        <div class="d-flex justify-content-center">
                            <div class="square-container">
                                <i class="bi bi-building-fill icon-style-pers"></i>
                            </div>
                            <div class="square-container">
                                <i class="bi bi-car-front-fill icon-style-pers"></i>
                            </div>
                            <div class="square-container">
                                <i class="bi bi-airplane-fill icon-style-pers"></i>
                            </div>
                            <div class="square-container">
                                <i class="bi bi-bus-front-fill icon-style-pers"></i>
                            </div>
                            <div class="square-container">
                                <i class="bi bi-suitcase2-fill icon-style-pers"></i>
                            </div>
                            <div class="square-container">
                                <i class="bi bi-brightness-alt-high-fill icon-style-pers"></i>
                            </div>
                            <div class="square-container">
                                <i class="bi bi-camera-fill icon-style-pers"></i>
                            </div>
                            <div class="square-container">
                                <i class="bi bi-train-freight-front-fill icon-style-pers"></i>
                            </div>
                            <div class="square-container">
                                <i class="bi bi-compass icon-style-pers"></i>
                            </div>
                            <div class="square-container">
                                <i class="bi bi-passport icon-style-pers"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Beneficios