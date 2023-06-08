import React from "react";

const AllergyModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal allergy_modal" onClick={props.onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_title">
          <h2>Add Allergy</h2>
        </div>
        <div className="modal_body">
          <h4>Allergy Type</h4>
          <form>
            <select>
              <option>Allergy Type</option>
              <option>Hay fever</option>
              <option>Atopic dermatitis</option>
              <option>Anaphylaxis</option>
              <option>Latex</option>
              <option>Beciomethasone nasal</option>
              <option>Aceta-Gesic</option>
              <option>Acuflex</option>
              <option>Loratadine</option>
              <option>Verbena</option>
              <option>Zymine</option>
            </select>
          </form>
          <input type="text" placeholder="Enter Allergy Name" />
          <h4>Diagnosed date</h4>
          <input type="date" className="calendar" />
          <input type="text" placeholder="Disease" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Medication" />
        </div>
        <div className="modal_footer">
          <button>Add</button>
          <button onClick={props.onClose} className="close_button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllergyModal;
