import React, { useState, useEffect } from "react";
import TablaTipos from "../components/Admin/TiposAlojamientos/TablaTipos";
import ModalCreateTipos from "../components/Admin/TiposAlojamientos/ModalCreateTipos";
import "../styles/admin.css";
import SideBar from "../components/Admin/TiposAlojamientos/Sidebar";
import CrudTipos from "../components/Admin/TiposAlojamientos/CrudTipos"
import Alojamiento from "../components/Admin/TiposAlojamientos/Alojamiento";

function Admin() {
  const [crudToShow, setCrudToShow] = useState(0);

   return (
    <div className="adminContainer">
          <SideBar setCrudToShow={setCrudToShow}/>
          {(crudToShow===1) ? 
          <div className="contenedores-components">
            <CrudTipos />
          </div> : 
          <div className="contenedores-components">
            <Alojamiento />
          </div>}
    </div>

  );
}

export default Admin;
