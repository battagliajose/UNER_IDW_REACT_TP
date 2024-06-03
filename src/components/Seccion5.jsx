import React from "react";
import "../styles/seccion5.css";
function Seccion5(props) {
    return( 
        <div className="container-fluid contenedorSeccion5">
        <div className="row fila-texto">
            <div className="col-md-6 frase-session5">
                <h4>Disfruta de la vida.Aprovecha la oportunidad</h4>
            </div>
            <div className="col-md-12 frase-Imagen">
                <img className="imagen" src={props.imagen} />
            </div>
            <div className="col-md-6 texto-session5 ">
                <p>Reserva ahora y disfruta de tarifas especiales que te permitirán vivir momentos inolvidables.
                    Relájate en nuestras elegantes habitaciones, deleita tu paladar con exquisita gastronomía 
                    en nuestros restaurantes de clase mundial y sumérgete en la serenidad  de nuestros spa de primera categoría.
                </p>  
                <div className="contenedor-button" ><button className="button-seccion5">Contactanos</button></div>                            
            </div>
        </div>                
        <div className="row contenedor">
            <div className="col-md-12 contenedor-Imagen">
                <img className="imagen" src={props.imagen} alt="Foto de Pileta" />
            </div>
        </div>
      
    </div>
    );
}

export default Seccion5;