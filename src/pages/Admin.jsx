import React, { useState } from "react";
import '../styles/admin.css'

const Admin =()=> {
    
    const [descripcion, setDescripcion] = useState('');

    const envioTipo = async (event) => { 
        event.preventDefault();

        const dataJson = {
            Descripcion: descripcion
        };

        // Envio del json
        try {
            const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
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
            <div className="form-container">
                <h2>Tipos de alojamientos</h2>
                <form onSubmit={envioTipo}>
                    <div>
                        <label htmlFor="descripcion">Tipo Alojamiento:</label>
                        <input
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        required
                        onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;