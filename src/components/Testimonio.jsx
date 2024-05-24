import React from "react";

function Testimonio (props) {
    return (
        <div>
            <div className="comentario">
                <img className="fotoTestimonio" src={props.imagen} alt="fotoTestimonio" />
                <p>{props.leyenda}<br /><br /><span className="resaltado">- {props.nombre} -</span></p>
            </div>
        </div>
    );
}

export default Testimonio;