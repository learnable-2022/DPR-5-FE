import React from "react";
import new_entry from "../images/new_entry.png";

const BloodGroup = () => {
  return (
    <div>
      <p>Chronic Disease</p>
      <span>
        <p>None</p>
        <p>
          <img src={new_entry} alt="" />
          New Entry
        </p>
      </span>
    </div>
  );
};

export default BloodGroup;
