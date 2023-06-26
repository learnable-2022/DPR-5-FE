import React, { useState } from "react";
import "../css/AddPatientRecord.css";
import contractAbi from "./contractABI.json";
import { ethers } from "ethers";

const contractAddress = "0x8084B71fd847053621f36a3A87DDC885f45A467D";
const abi = contractAbi;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner(); // Get the signer from the provider
const contract = new ethers.Contract(contractAddress, abi, signer); // Use the signer

const AddPatientRecord = () => {
  const [error, setError] = useState(null);

  const handleAddPatientRecord = async () => {
    try {
      const bloodGroup = document.getElementById("bloodGroup").value;
      const genotype = document.getElementById("genotype").value;
      const weight = document.getElementById("weight").value;

      await contract.addPatientRecord(bloodGroup, genotype, weight);
      console.log("Patient record added successfully!");
    } catch (error) {
      setError(error.message);
      console.error("Error adding patient record:", error);
      window.alert(error.message); // Display error as an alert
    }
  };

  return (
    <div className="info-section">
      <section>
        <div className="patient-details-section">
          <h3>Blood Group</h3>
          <form action="">
            <select id="bloodGroup" name="">
              <option value="">None</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
          </form>
        </div>
      </section>
      <section>
        <div className="patient-details-section">
          <h3>Genotype</h3>
          <form action="">
            <select id="genotype" name="">
              <option value="">None</option>
              <option value="AA">AA</option>
              <option value="AC">AC</option>
              <option value="AS">AS</option>
              <option value="CC">CC</option>
              <option value="SC">SC</option>
              <option value="SS">SS</option>
            </select>
          </form>
        </div>
      </section>
      <section>
        <div className="patient-details-section">
          <h3>Weight (kg)</h3>
          <input id="weight" type="text" placeholder="0" />
        </div>
      </section>
      <button
        id="addButton"
        className="add-button"
        onClick={handleAddPatientRecord}
      >
        Add Patient Record
      </button>
    </div>
  );
};

export default AddPatientRecord;
