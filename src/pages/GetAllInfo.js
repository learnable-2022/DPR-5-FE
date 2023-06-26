import React, { useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../components/contractABI.json'; // Replace with the actual path to your contract ABI JSON file
import Logo from '../assets/medisync-logo.png';

const provider = new ethers.providers.Web3Provider(window.ethereum); // Use MetaMask as the provider
const contractAddress = '0x8084B71fd847053621f36a3A87DDC885f45A467D'; // Replace with your contract address
const contract = new ethers.Contract(contractAddress, contractABI, provider);

const GetAllInfo = () => {
  const [patientAddress, setPatientAddress] = useState('');
  const [patientInfo, setPatientInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleViewClick = async () => {
    try {
      const patientInfo = await contract.getAllInfo(patientAddress);
      setPatientInfo(patientInfo);
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
      alert('Failed: ' + error.message);
    }
  };

  return (
    <div className="medisync__wallet_details get-all-info">
      <img src={Logo} alt="Logo" />

      <h5>To view a patient's record, enter the patient's wallet address:</h5>
      <input type="text" value={patientAddress} onChange={(e) => setPatientAddress(e.target.value)} />
      <button onClick={handleViewClick}>View</button>

      {patientInfo && (
        <div>
          <h6>Allergy Information:</h6>
          <ul>
            {patientInfo.allergies.map((allergy, index) => (
              <li key={index}>
                <strong>Allergy Name:</strong> {allergy.allergyName}
                <br />
                <strong>Start Date:</strong> {allergy.startDate}
                <br />
                <strong>Description:</strong> {allergy.description}
                <br />
                <strong>Medication:</strong> {allergy.medication}
              </li>
            ))}
          </ul>

          <h6>Disability Information:</h6>
          <ul>
            {patientInfo.disabilities.map((disability, index) => (
              <li key={index}>
                <strong>Disability Name:</strong> {disability.disabilityName}
                <br />
                <strong>Diagnosis Date:</strong> {disability.diagnosisDate}
                <br />
                <strong>Description:</strong> {disability.description}
                <br />
                <strong>Medication:</strong> {disability.medication}
              </li>
            ))}
          </ul>

          <h6>Other Information:</h6>
          <ul>
            {patientInfo.otherInfo.map((info, index) => (
              <li key={index}>
                <strong>Title:</strong> {info.title}
                <br />
                <strong>Diagnosed Date:</strong> {info.diagnosedDate}
                <br />
                <strong>Disease:</strong> {info.disease}
                <br />
                <strong>Description:</strong> {info.description}
                <br />
                <strong>Medication:</strong> {info.medication}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetAllInfo;
