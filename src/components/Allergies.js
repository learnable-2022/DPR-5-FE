import React, { useState } from "react";
import AllergyModal from "../components/AllergyModal";
import no_records from "../images/no_record.png";
import entry from "../images/entry.png";

const Allergies = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="allergy">
      <h3>Allergies</h3>
      <span>
        <div className="allergies_card">
          <img src={no_records} alt="" />
          <p>No Record Yet</p>
        </div>
        <div className="new-entry_section" onClick={() => setShow(true)}>
          <img src={entry} alt="" />
          <h3>New Entry</h3>
        </div>
        <AllergyModal onClose={() => setShow(false)} show={show} />
      </span>
    </div>
  );
};

export default Allergies;
