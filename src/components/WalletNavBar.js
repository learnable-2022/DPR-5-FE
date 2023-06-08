import React from "react";
import notification_icon from "../images/notification2.png";
import hamburger_icon from "../images/menu-2.png";
import "../css/walletnavbar.css";

const WalletNavBar = () => {
  return (
    <div className="nav_bar wallet_nav-bar">
      <span>
        <h2>Hello John</h2>
        <h4>Wallet Address</h4>
      </span>
      <div className="icon">
        <img className="notifictaion_icon" src={notification_icon} alt="" />
        <img src={hamburger_icon} alt="" />
      </div>
    </div>
  );
};

export default WalletNavBar;
