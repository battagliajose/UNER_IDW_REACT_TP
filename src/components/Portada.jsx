import React from "react";
import '../styles/portada.css'
import portadaImagen from '../assets/portada/friends-planning-travel-looking-at-map-article-032822_wide.jpg'

function Portada(props) {
    return( 
        <section class="portada">
            <div class="contenedorImagenPortada">
                <img class="imagenPortada" src={portadaImagen} alt="friends friends-planning-travel-looking-at-map-article-032822" />
                <div class="botonera">
                    <input class="inputPortada" type="text" placeholder="Donde quieres viajar?" />
                    <input class="inputPortada" type="text" placeholder="Elije una fecha.." />
                    <div class="btnPortada">Encontrar!</div>
                </div>
            </div>
            <div class="espaciador">
                <img class="imagenPortadaEspaciador" src={portadaImagen} alt="friends friends-planning-travel-looking-at-map-article-032822" />
            </div>
        </section>
    );
}

export default Portada;