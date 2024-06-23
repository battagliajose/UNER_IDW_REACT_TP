import React, {useState, useEffect} from "react";

import Portada from "../components/Portada";
import Beneficios from "../components/Beneficios";
import Tarjetas from "../components/Tarjetas";
import Seccion5 from "../components/Seccion5";
import sessionImagen from "../assets/seccion5/session5-img.jpg";

function Home(props) {

  //Variables para pasar a tarjetas

  const [selectedTipo, setSelectedTipo] = useState("");
  const [selectedDormitorios, setSelectedDormitorios] = useState("");
  
  return (
    <div>
      <Portada       
         setSelectedTipo={setSelectedTipo} 
         setSelectedDormitorios={setSelectedDormitorios}
      />
      <Beneficios />
      <Tarjetas 
        selectedTipo={selectedTipo}
        selectedDormitorios={selectedDormitorios} 
       />
      <Seccion5 imagen={sessionImagen} />
    </div>
  );
}

export default Home;
