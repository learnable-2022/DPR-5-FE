import React, { useState } from "react";

const AllergyModal = (props) => {
  const [allergyDetails, setAllergyDetails] = useState({
    allergyName: "",
    disease: "",
    description: "",
    medication: "",
    diagnosedDate: "",
  });
  if (!props.show) {
    return null;
  }

  const addAllergyModal = () => {};

  return (
    <div className="modal allergy_modal" onClick={props.onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_title">
          <h2>Add Allergy</h2>
        </div>
        <div className="modal_body">
          <h4>Allergy Name</h4>
          <input type="text" placeholder="Enter Allergy Name" />
          <h4>Diagnosed date</h4>
          <input type="text" placeholder="Put in the date" />
          <h4>Disease</h4>
          <input type="text" placeholder="Disease" />
          <h4>Description</h4>
          <input type="text" placeholder="Description" />
          <h4>Medication</h4>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Medication"
          ></textarea>
        </div>
        <div className="modal_footer">
          <button onClick={addAllergyModal}>Add</button>
          <button onClick={props.onClose} className="close_button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllergyModal;
