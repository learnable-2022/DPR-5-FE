import React, { useState } from "react";
import AllergyModal from "../components/AllergyModal";
import no_records from "../images/no_record.png";
import entry from "../images/entry.png";
import { useSnapshot } from "valtio";
import store from "../store/Index";

const Allergies = () => {
  const [show, setShow] = useState(false);
  const snap = useSnapshot(store);

  return (
    <div className="allergy">
      <h3>Allergies</h3>
      <span>
        <div className="allergies_card">
          <img src={no_records} alt="" />
          <p>{snap.allergyData}</p>
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
