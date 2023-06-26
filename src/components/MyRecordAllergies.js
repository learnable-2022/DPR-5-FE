import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import noRecordsImage from '../images/no_record.png';
import contractAbi from './contractABI.json';
import "../css/getPatientRecord.css";

const MyRecordAllergies = () => {
  const [allergies, setAllergies] = useState(null);
  const [patientAddress, setPatientAddress] = useState('');

  // Connect to the Ethereum provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // Contract address and ABI
  const contractAddress = '0x8084B71fd847053621f36a3A87DDC885f45A467D';
  const contractABI = contractAbi;

  // Connect to the contract
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const getAllergy = async () => {
    try {
      // Call the getAllergy function from the contract
      const allergyData = await contract.getAllergy(patientAddress);
      setAllergies(allergyData);
    } catch (error) {
      console.error('Error fetching allergy data:', error);
    }
  };

  const fetchConnectedAddress = async () => {
    if (window.ethereum) {
      try {
        // Request access to the user's MetaMask accounts
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          const connectedAddress = accounts[0];
          setPatientAddress(connectedAddress);
        }
      } catch (error) {
        console.error('Error fetching connected address:', error);
      }
    }
  };

  useEffect(() => {
    fetchConnectedAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  return (
    <>
    <div className="my_record_allergy">
      <h3>Allergies</h3>
      {allergies ? (
        allergies.map(allergy => (
          <div className="disabilities_card" key={allergy._allergyName}>
            <p>Allergy Name: {allergy.allergyName}</p>
            <p>Description: {allergy.description}</p>
            <p>Start Date: {new Date(allergy.startDate * 1000).toLocaleString()}</p>
            <p>Medication: {allergy.medication}</p>
          </div>
        ))
      ) : (
        <div className="disabilities_card">
          <img src={noRecordsImage} alt="" />
          <p>No Record Yet</p>
        </div>
      )}
      <button onClick={getAllergy}>Get Allergies</button>
      </div>
    </>
  );
};

export default MyRecordAllergies;
