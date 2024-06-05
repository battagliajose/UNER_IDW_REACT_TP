import React, { useState, useEffect } from "react";
import TablaTipos from "../components/Admin/TiposAlojamientos/TablaTipos";
import ModalCreateTipos from "../components/Admin/TiposAlojamientos/ModalCreateTipos";
import "../styles/admin.css";
import SideBar from "../components/Admin/TiposAlojamientos/Sidebar";

function Admin() {

   return (
    <div>
          <SideBar/>      
    </div>

  );
}

export default Admin;
