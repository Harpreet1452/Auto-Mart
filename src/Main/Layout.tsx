import React from "react";
import NavBar from "./NavBar/NavBar";
import SideBar from "../Main/SideBar/SideBar";
import Footer from "./Footer/Footer";
import VehicleListing from "../Components/VehicleListing/VehicleListing";
import "../Main/styles.css";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <NavBar />
      <SideBar />
      <div className="content-wrapper">
        <VehicleListing />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
