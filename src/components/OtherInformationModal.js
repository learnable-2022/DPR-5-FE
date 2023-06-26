import React, { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./contractABI.json";

const AddOtherInformation = (props) => {
  const [title, setTitle] = useState("");
  const [diagnosedDate, setDiagnosedDate] = useState("");
  const [disease, setDisease] = useState("");
  const [description, setDescription] = useState("");
  const [medication, setMedication] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contractAddress = "0x8084B71fd847053621f36a3A87DDC885f45A467D"; 
  const contractAbi = contractABI; 

  const addOtherInformation = async () => {
    try {
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);

      // Call the addOtherInformation function
      await contract.addOtherInformation(
        title,
        Date.parse(diagnosedDate) / 1000,
        disease,
        description,
        medication
      );

      // Clear the form inputs
      setTitle("");
      setDiagnosedDate("");
      setDisease("");
      setDescription("");
      setMedication("");

      // Trigger the onClose callback to close the modal
      props.onClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal other-information_modal" onClick={props.onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_title">
          <h2>Any other Disease state?</h2>
        </div>
        <div className="modal_body">
          <h4>Title</h4>
          <input
            type="text"
            placeholder="What kind of sickness?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h4>Diagnosed date</h4>
          <input
            type="date"
            placeholder="YYYY-MM-DD"
            value={diagnosedDate}
            onChange={(e) => setDiagnosedDate(e.target.value)}
          />
          <h4>Disease</h4>
          <input
            type="text"
            placeholder="Name of sickness?"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
          />
          <h4>Description</h4>
          <input
            type="text"
            placeholder="Nature of sickness?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h4>Medication</h4>
          <input
            type="text"
            placeholder="What medications do you take?"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          />
        </div>
        <div className="modal_footer">
          <button onClick={addOtherInformation}>Add</button>
          <button onClick={props.onClose} className="close_button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOtherInformation;
