import React from "react";
import '../styles/notfound.css'
import image404 from '../assets/notfound/404.png'

function NotFound(props){
    return (
        <div className = "notfound">
            <img src={image404} alt="404 - Página no encontrada" />
        </div>
    );
}

export default NotFound;