import React, { useState } from "react";
import no_records from "../images/no_record.png";
import entry from "../images/entry.png";
import OtherInformationModal from "./OtherInformationModal";

const OtherInformations = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h3>Other Informations</h3>
      <span>
        <div className="other-information_card">
          <img src={no_records} alt="" />
          <p>No Record Yet</p>
        </div>
        <div className="new-entry_section" onClick={() => setShow(true)}>
          <img src={entry} alt="" />
          <h3>New Entry</h3>
        </div>
        <OtherInformationModal onClose={() => setShow(false)} show={show} />
      </span>
    </>
  );
};

export default OtherInformations;
