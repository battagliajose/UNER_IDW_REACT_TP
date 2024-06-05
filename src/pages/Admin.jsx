import React, { useState, useEffect } from "react";
import TablaTipos from "../components/Admin/TiposAlojamientos/TablaTipos";
import ModalCreateTipos from "../components/Admin/TiposAlojamientos/ModalCreateTipos";
import "../styles/admin.css";
import SideBar from "../components/Admin/TiposAlojamientos/Sidebar";

function Admin() {
  const [crudToShow, setCrudToShow] = useState(0);

   return (
    <div className="adminContainer">
          <SideBar setCrudToShow={setCrudToShow}/>
          {(crudToShow===1) ? <h2>CRUD Tipos!</h2> : <h2>CRUD Alojamientos!</h2>}      
    </div>

  );
}

export default Admin;
