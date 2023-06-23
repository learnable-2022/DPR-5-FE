import React, { useState } from "react";
import no_records from "../images/no_record.png";
import entry from "../images/entry.png";
import DisabilitiesModal from "./DisabilitiesModal";

const Disabilities = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h3>Disabilities</h3>
      <span>
        <div className="disabilities_card">
          <img src={no_records} alt="" />
          <p>No Record Yet</p>
        </div>
        <div className="new-entry_section" onClick={() => setShow(true)}>
          <img src={entry} alt="" />
          <h3>New Entry</h3>
        </div>
        <DisabilitiesModal onClose={() => setShow(false)} show={show} />
      </span>
    </>
  );
};

export default Disabilities;
