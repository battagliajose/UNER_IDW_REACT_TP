import React, { useState } from "react";
import '../styles/styleform.css'

const Admin =()=> {

    
const [descripcion,setDescripcion]=useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    setDescripcion({              
      [name]: value,
    });
  };
const envioTipo = async (e) => { 
    e.prevent();
    const dataJson={
        Descricpion: descripcion
    };
    //envio del json
    try {
        
        const response =await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJson)
        });
        if(response.ok){
            alert('Tipo alojamiento creado');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
};




    return (
        <div>
            <h1 style={{margin: "300px"}}>ADMIN</h1>
            <div className="form-container">
                <h2>Tipos de alojamientos</h2>
                <form onSubmit={envioTipo}>
                    <div>
                        <label htmlFor="descripcion">Tipo Alojamiento:</label>
                        <input
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;