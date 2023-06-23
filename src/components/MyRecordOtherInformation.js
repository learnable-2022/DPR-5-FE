import React from "react";
import no_records from "../images/no_record.png";

const MyRecordOtherInformation = () => {
  return (
    <>
      <h3>Other Informations</h3>
      <span>
        <div className="disabilities_card">
          <img src={no_records} alt="" />
          <p>No Record Yet</p>
        </div>
      </span>
    </>
  );
};

export default MyRecordOtherInformation;
