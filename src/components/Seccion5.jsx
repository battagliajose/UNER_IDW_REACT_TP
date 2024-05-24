import React from "react";

function Seccion5(props) {
    return( 
        <section>
        <div class="container-fluid contenedorSeccion5">
            <div class="row fila-texto">
                <div class="col-md-6 frase-session5">
                    <h4>Disfruta de la vida.Aprovecha la oportunidad</h4>
                </div>
                <div class="col-md-12 frase-Imagen">
                    <image class="imagen" src={"../public/session5-img.jpg"} alt="Foto de Pileta"/>
                </div>
                <div class="col-md-6 texto-session5 ">
                    <p>Reserva ahora y disfruta de tarifas especiales que te permitirán vivir momentos inolvidables.
                        Relájate en nuestras elegantes habitaciones, deleita tu paladar con exquisita gastronomía 
                        en nuestros restaurantes de clase mundial y sumérgete en la serenidad  de nuestros spa de primera categoría.
                    </p>  
                    <div class="contenedor-button" ><button class="button-seccion5">Contactanos</button></div>                            
                </div>
            </div>                
            <div class="row contenedor">
                <div class="col-md-12 contenedor-Imagen">
                    <img class="imagen" src={"../public/session5-img.jpg"} alt="Foto de Pileta"/>
                </div>
            </div>
          
        </div>
    </section>
    );
}

export default Seccion5;