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
          <input type="text" placeholder="Type in your dissability type" />
          <h4>Disease</h4>
          <input type="text" placeholder="Type in your disease type" />
          <input type="text" placeholder="Description" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Medication"
          ></textarea>
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
