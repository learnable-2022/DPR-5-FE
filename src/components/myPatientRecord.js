import { ethers } from 'ethers';
import React, { useState } from 'react';
import "../css/getPatientRecord.css"
import contractAbi from './contractABI.json';

const GetPatientRecord = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [genotype, setGenotype] = useState('');
  const [weight, setWeight] = useState('');

  const handleViewButtonClick = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractABI = contractAbi;
      const contractAddress = '0x8084B71fd847053621f36a3A87DDC885f45A467D';
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const patientAddress = accounts[0];

      const records = await contract.getPatientRecord(patientAddress);

      setBloodGroup(records[0]);
      setGenotype(records[1]);
      setWeight(records[2].toString());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="get-patient-record">
      <section>
        <h5>Blood Group</h5>
        <input type="text" value={bloodGroup} readOnly />
      </section>
      <section>
        <h5>Genotype</h5>
        <input type="text" value={genotype} readOnly />
      </section>
      <section>
        <h5>Weight (kg)</h5>
        <input type="text" value={weight} readOnly />
      </section>
      <button className="get-patient-record-btn" onClick={handleViewButtonClick}>
        View
      </button>
    </div>
  );
};

export default GetPatientRecord;
