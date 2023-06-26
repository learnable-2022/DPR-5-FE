import React, { useState, useEffect } from "react";
import no_records from "../images/no_record.png";
import { ethers } from "ethers";
import contractAbi from "./contractABI.json";

const GetDisability = () => {
  const [disability, setDisability] = useState(null);
  const [diagnosisDate, setDiagnosisDate] = useState(null);
  const [description, setDescription] = useState(null);
  const [medication, setMedication] = useState(null);
  const [patientAddress, setPatientAddress] = useState(null);

  const contractAddress = "0x8084B71fd847053621f36a3A87DDC885f45A467D";
  const contractABI = contractAbi;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  useEffect(() => {
    const fetchPatientAddress = async () => {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        setPatientAddress(address);
      } catch (error) {
        console.error("Error fetching patient address:", error);
      }
    };

    fetchPatientAddress();
  }, []);

  const handleClick = async () => {
    try {
      const fetchedData = await contract.getDisability(patientAddress);
      const [disability, diagnosisDate, description, medication] = fetchedData;
      setDisability(disability);
      setDiagnosisDate(diagnosisDate.toNumber());
      setDescription(description);
      setMedication(medication);
    } catch (error) {
      console.error("Error retrieving disability:", error);
    }
  };

  return (
    <>
      <h3>Disabilities</h3>
      <div className="disabilities_card">
        {disability ? (
          <div className="disabilities-details">
            <img src={disability.image} alt="" />
            <p>Disability: {disability}</p>
            <p>Diagnosis Date: {diagnosisDate}</p>
            <p>Description: {description}</p>
            <p>Medication: {medication}</p>
          </div>
        ) : (
          <>
            <img src={no_records} alt="" />
            <p>No Record Yet</p>
          </>
        )}
      </div>
      <button onClick={handleClick}>Get Disability</button>
    </>
  );
};

export default GetDisability;
