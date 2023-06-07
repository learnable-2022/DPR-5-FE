import React from "react";
import no_records from "../images/no_record.png";
import entry from "../images/entry.png";

const OtherInformations = () => {
  return (
    <>
      <h3>Other Informations</h3>
      <span>
        <div className="other-information_card">
          <img src={no_records} alt="" />
          <p>No Record Yet</p>
        </div>
        <div className="new-entry_section">
          <img src={entry} alt="" />
          <h3>New Entry</h3>
        </div>
      </span>
    </>
  );
};

export default OtherInformations;
