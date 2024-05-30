import TablaTipos from "../components/Admin/TiposAlojamientos/TablaTipos";
import CreateTipos from "../components/Admin/TiposAlojamientos/CreateTipos"

import '../styles/admin.css'

function Admin() {

    return (
        <div className="admin">
            <h2 className="tituloTipos">Tipos de alojamientos</h2>
            <TablaTipos />
            <CreateTipos />
        </div>
    );
}

export default Admin;