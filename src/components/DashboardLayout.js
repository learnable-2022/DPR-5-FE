import React, { useEffect } from "react";
import "../css/styles.css";
import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("connectwallet");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
