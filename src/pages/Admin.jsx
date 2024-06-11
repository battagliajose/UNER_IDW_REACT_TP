import React, { useState } from "react";

/*import SideBar from "../components/Admin/Sidebar";*/
import NavbarCrud from "../components/Admin/NavbarCrud";
import CrudTipos from "../components/Admin/CRUD_TiposAlojamientos/CrudTipos"
import CrudAlojamientos from "../components/Admin/CRUD_Alojamientos/CrudAlojamientos";
import CrudServicios from "../components/Admin/CRUD_Servicios/CrudServicios"

import "../styles/admin.css";

function Admin() {
  //El menu cambia el valor de crudToShow y se renderiza el componente correspondiente.
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
  };

  return (
    <>
    <NavbarCrud setCrudToShow={setCrudToShow} />
    <div className="adminContainer">      
      <div className="content">
        {renderComponent()}
      </div>
    </div>
    </>
  );
}

export default Admin;