import React from "react";
import Tarjeta from "./Tarjeta"
import '../styles/tarjetas.css'
import apartmentImage1 from '../assets/tarjetas/apartment-01.jpg';
import apartmentImage2 from '../assets/tarjetas/apartment-02.jpg';
import apartmentImage3 from '../assets/tarjetas/apartment-03.jpg';
import apartmentImage4 from '../assets/tarjetas/apartment-04.jpg';
import apartmentImage5 from '../assets/tarjetas/apartment-05.jpg';

function Tarjetas(props) {
    return (
        <div className='cards'>
            <Tarjeta img={apartmentImage1} titulo={"Bella vista"} descrip={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque praesentium repellat magnam laudantium nisi!"} oferta={"18% off"} />
            <Tarjeta img={apartmentImage2} titulo={"Cerca de la playa"} descrip={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat."} oferta={"10% off"} />
            <Tarjeta img={apartmentImage3} titulo={"Gran capacidad"} descrip={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} oferta={"5% off"} />
            <Tarjeta img={apartmentImage4} titulo={"Ciudad"} descrip={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque praesentium repellat magnam laudantium nisi!"} oferta={"15% off"} />
            <Tarjeta img={apartmentImage5} titulo={"Campo"} descrip={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} oferta={"25% off"} />
        </div>
    );
}

export default Tarjetas;