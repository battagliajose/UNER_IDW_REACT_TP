import React, {useState} from "react";

import Portada from "../components/Portada";
import Beneficios from "../components/Beneficios";
import Tarjetas from "../components/Tarjetas";
import Seccion5 from "../components/Seccion5";
import sessionImagen from "../assets/seccion5/session5-img.jpg";

function Home(props) {

  //Variables para pasar a tarjetas
  const [selectedTipo, setSelectedTipo] = useState("");
  const [selectedDormitorios, setSelectedDormitorios] = useState("");
  const [btnBuscar, setbtnBuscarHome] = useState(false); 
  return (
    <div>
      <Portada       
         setSelectedTipo={setSelectedTipo} 
         setSelectedDormitorios={setSelectedDormitorios}
         setbtnBuscarHome={setbtnBuscarHome}
      />
      <Beneficios />
      <Tarjetas 
        selectedTipo={selectedTipo}
        selectedDormitorios={selectedDormitorios} 
        btnBuscar={btnBuscar}
       />
      <Seccion5 imagen={sessionImagen} />
    </div>
  );
}

export default Home;
