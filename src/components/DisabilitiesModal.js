import React, { useState } from "react";
import { ethers } from "ethers";
import contractAbi from "./contractABI.json";

const contractAddress = "0x8084B71fd847053621f36a3A87DDC885f45A467D";
const contractABI = contractAbi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

const DisabilitiesModal = (props) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddDisability = async () => {
    try {
      const disability = document.getElementById("disabilityInput").value;
      const diagnosisDateInput =
        document.getElementById("diagnosisDateInput").value;
      const description = document.getElementById("descriptionInput").value;
      const medication = document.getElementById("medicationInput").value;

      // Convert diagnosisDate to a Unix timestamp
      const diagnosisDate = new Date(diagnosisDateInput).getTime() / 2000;

      await contract.addDisability(
        disability,
        diagnosisDate,
        description,
        medication
      );

      document.getElementById("disabilityInput").value = "";
      document.getElementById("diagnosisDateInput").value = "";
      document.getElementById("descriptionInput").value = "";
      document.getElementById("medicationInput").value = "";

      props.onClose();
    } catch (error) {
      console.error("Error adding disability:", error);
      setErrorMessage(
        "An error occurred while adding the disability. Please try again."
      );
    }
  };

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
          <h4>Disability</h4>
          <input
            id="disabilityInput"
            type="text"
            placeholder="What is your disease state?"
          />
          <h4>Diagnosis date</h4>
          <input id="diagnosisDateInput" type="date" placeholder="YYYY-MM-DD" />
          <h4>Description</h4>
          <input id="descriptionInput" type="text" placeholder="Description" />
          <h4>Medication</h4>
          <input id="medicationInput" type="text" placeholder="Add your meds" />
        </div>
        <div className="modal_footer">
          <button onClick={handleAddDisability}>Add</button>
          <button onClick={props.onClose} className="close_button">
            Close
          </button>
        </div>
        {errorMessage && <p className="error_message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default DisabilitiesModal;
