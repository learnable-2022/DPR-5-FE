import React from "react";
import "../../css/styles.css";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import profile from "../../images/profile_circle.png";

const MedicalRecords = () => {
  return (
    <>
      <SideBar />
      <section>
        <NavBar />
        <ul>
          <img src={profile} alt="" />
          <p>Profile Page</p>
        </ul>
      </section>
    </>
  );
};

export default MedicalRecords;
