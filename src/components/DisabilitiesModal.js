import React from "react";

const DisabilitiesModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal disabilities_modal" onClick={props.onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_title">
          <h2>Add Disability</h2>
        </div>
        <div className="modal_body">
          <h4>Disability Type</h4>
          <input type="checkbox" />
          <p>Learning Disability</p>
          <h4>Diagnosed date</h4>
          <input type="date" className="calendar" />
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

export default DisabilitiesModal;
