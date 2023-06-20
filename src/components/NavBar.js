import React from "react";
import store from "../store/Index";
import { useSnapshot } from "valtio";

const NavBar = () => {
  const snap = useSnapshot(store);
  const fullName = `${snap.userData.firstName} ${snap.userData.lastName}`;
  return (
    <div className="nav_bar">
      <h2>{fullName}</h2>
    </div>
  );
};

export default NavBar;
