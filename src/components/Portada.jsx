import React from "react";
import '../styles/portada.css'
import portadaImagen from '../assets/portada/friends-planning-travel-looking-at-map-article-032822_wide.jpg'

function Portada(props) {
    return( 
        <section className="portada">
            <div className="contenedorImagenPortada">
                <img className="imagenPortada" src={portadaImagen} alt="friends friends-planning-travel-looking-at-map-article-032822" />
                <div className="botonera">
                    <input className="inputPortada" type="text" placeholder="Donde quieres viajar?" />
                    <input className="inputPortada" type="text" placeholder="Elije una fecha.." />
                    <div className="btnPortada">Encontrar!</div>
                </div>
            </div>
            <div className="espaciador">
                <img className="imagenPortadaEspaciador" src={portadaImagen} alt="friends friends-planning-travel-looking-at-map-article-032822" />
            </div>
        </section>
    );
}

export default Portada;