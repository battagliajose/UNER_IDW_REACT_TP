import React, { useState, useEffect } from "react";
import "../styles/admin.css";
import SideBar from "../components/Admin/Sidebar";
import CrudTipos from "../components/Admin/CRUD_TiposAlojamientos/CrudTipos"
import CrudAlojamientos from "../components/Admin/CRUD_Alojamientos/CrudAlojamientos";
import CrudServicios from "../components/Admin/CRUD_Servicios/CrudServicios"

function Admin() {
  const [crudToShow, setCrudToShow] = useState(0);

  const renderComponent = () => {
    switch (crudToShow) {
      case 0:
        return <CrudAlojamientos />;
      case 1:
        return <CrudTipos />;
      case 2:
        return <CrudServicios />;
      default:
        return <CrudAlojamientos />;
    }
  }

   return (
    <div className="adminContainer">
          <SideBar setCrudToShow={setCrudToShow}/>
          {renderComponent()}
    </div>
  );
}

export default Admin;
