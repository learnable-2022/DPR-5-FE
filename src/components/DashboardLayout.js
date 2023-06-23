import React from "react";
import "../css/styles.css";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const DashboardLayout = () => {
  return (
    <div className="app_container">
      <SideBar />
      <section>
        <Navbar />
        <Outlet />
      </section>
    </div>
  );
};

export default DashboardLayout;
