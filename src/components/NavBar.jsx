import React from "react";
import { Link } from "react-router-dom"; 

function NavBar(props) {
   return( 
        <div>
            <Link to="/">Home -</Link>
            <Link to="/nosotros">Nosotros -</Link>
            <Link to="/contacto">Contacto</Link>
        </div>
    );
}

export default NavBar;