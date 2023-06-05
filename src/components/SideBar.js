import React from "react";
import logo from "../images/logo.png";
import patient from "../images/patient.png";
import upload_medical_record from "../../src/images/upload.png";
import medical from "../images/view.png";
import update from "../images/update.png";
import history from "../images/replay.png";
import delete_item from "../images/delete.png";
import "../css/styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side_bar">
      <img className="logo" src={logo} alt="" />
      <img className="patient_image" src={patient} alt="" />
      <ul>
        <CustomLink to="/dashboard/medicalrecords">
          <img src={upload_medical_record} alt="" />
          <p>Upload Medical Record</p>
        </CustomLink>
        <CustomLink to="/dashboard/medical">
          <img src={medical} alt="" />
          <p>View Medical Records</p>
        </CustomLink>
        <CustomLink to="/dashboard">
          <img src={update} alt="" />
          <p>Update Medical Record</p>
        </CustomLink>
        <CustomLink to="/dashboard">
          <img src={history} alt="" />
          <p>Record History</p>
        </CustomLink>
        <CustomLink to="/dashboard">
          <img src={delete_item} alt="" />
          <p>Deleted Items</p>
        </CustomLink>
      </ul>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default SideBar;
