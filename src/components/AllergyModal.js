import React, { useState } from "react";
import { BigNumber, ethers } from 'ethers';
import contractABI from "./contractABI.json";

 
const AllergyModal = (props) => {
  const [allergyDetails, setAllergyDetails] = useState({
    allergyName: "",
    description: "",
    startDate: "",
    medication: "",
  });
  const contractAddress = '0x8084B71fd847053621f36a3A87DDC885f45A467D';
  const contractAbi = contractABI; 
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();


  if (!props.show) {
    return null;
  }

 

  const addAllergy = async () => {
    try {
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      const { allergyName, description, startDate, medication } = allergyDetails;

      const startDateValue = BigNumber.from(Date.parse(startDate) / 1000);
      await contract.addAllergy(allergyName, description, startDateValue, medication);

      setAllergyDetails({
        allergyName: "",
        description: "",
        startDate: "",
        medication: "",
      });

      alert("Allergy added successfully!");

      props.onClose();
    } catch (error) {
      console.error("Error adding allergy:", error);
      alert("Error adding allergy. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setAllergyDetails({
      ...allergyDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modal allergy_modal" onClick={props.onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_title">
          <h2>Add Allergy</h2>
        </div>
        <div className="modal_body">
          <h4>Allergy Name</h4>
          <input
            type="text"
            name="allergyName"
            value={allergyDetails.allergyName}
            onChange={handleInputChange}
            placeholder="Enter Allergy Name"
          />
          <h4>Description</h4>
          <input
            type="text"
            name="description"
            value={allergyDetails.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <h4>Start Date</h4>
          <input
            type="date"
            name="startDate"
            value={allergyDetails.startDate}
            onChange={handleInputChange}
            pattern="\d{4}-\d{2}-\d{2}"
            placeholder="YYYY-MM-DD"
          />
          <h4>Medication</h4>
          <input
            type="text"
            name="medication"
            value={allergyDetails.medication}
            onChange={handleInputChange}
            placeholder="Put in the meds"
          />
        </div>
        <div className="modal_footer">
          <button onClick={addAllergy}>Add</button>
          <button onClick={props.onClose} className="close_button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllergyModal;
