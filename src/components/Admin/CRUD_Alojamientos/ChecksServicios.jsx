import React, {useState} from "react";

function ChecksServicios({dataServicios, selectedServicios, setSelectedServicios}) {
  
  const checkBoxClickHandler = (e) => {
    const valor = parseInt(e.target.value); // Convertir el valor a entero

    // Verificar si el valor ya está en selectedServicios
    if (selectedServicios.includes(valor)) {
      // Si el valor ya está, filtrar el array para quitarlo
      setSelectedServicios(selectedServicios.filter(item => item !== valor));
    } else {
      // Si el valor no está, agregarlo al array
      setSelectedServicios([...selectedServicios, valor]);
    }
  };
  return(
        <div className="divServicios">                  
                  { dataServicios.map(servicio => {
                      return(
                        <div className="checkServ">                          
                          <label class="container">{servicio.Nombre}</label>
                          <input 
                            value={servicio.idServicio} 
                            checked={selectedServicios.includes(servicio.idServicio)} 
                            style={{maxWidth: "1rem"}} 
                            type="checkbox" 
                            onChange={checkBoxClickHandler}
                          />
                        </div>
                      )
                    })
                  }
                </div>
    );
}

export default ChecksServicios;