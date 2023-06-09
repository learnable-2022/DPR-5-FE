import React from "react";

const OtherInformationModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal other-information_modal" onClick={props.onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_title">
          <h2>Title</h2>
          <input type="text" placeholder="Enter title here" />
        </div>
        <div className="modal_body">
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

export default OtherInformationModal;
