import React from "react";

import Portada from '../components/Portada'
import Beneficios from '../components/Beneficios'
import Tarjetas from '../components/Tarjetas'
import Seccion5 from '../components/Seccion5'
import sessionImagen from '../assets/seccion5/session5-img.jpg'

function Home(props){
    return (
        <div>
            <Portada />
            <Beneficios />
            <Tarjetas />
            <Seccion5 imagen= {sessionImagen} />
        </div>
    );
}

export default Home

