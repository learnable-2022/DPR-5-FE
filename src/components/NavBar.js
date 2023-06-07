import React from "react";
import notification from "../images/notification2.png";
import toggle from "../images/toggle.png";

const NavBar = () => {
  return (
    <div className="nav_bar">
      <h2>Hello John</h2>
      <span>
        <h4>Permit Share</h4>
        <img src={toggle} alt="" />
      </span>
      <img className="notification_icon" src={notification} alt="" />
    </div>
  );
};

export default NavBar;
