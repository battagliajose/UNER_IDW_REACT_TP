import TablaTipos from "../components/Admin/TiposAlojamientos/TablaTipos";
import ModTipos from "../components/Admin/TiposAlojamientos/ModTipos"

import '../styles/admin.css'

function Admin() {

    return (
        <div>
            <div>
                <h2 className="tituloTipos">Tipos de alojamientos</h2>
                <TablaTipos />
            </div>
            <ModTipos />
        </div>
    );
}

export default Admin;