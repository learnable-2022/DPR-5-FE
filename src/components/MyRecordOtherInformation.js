import React, { useState } from "react";
import { ethers } from "ethers";
import no_records from "../images/no_record.png";
import contractAbi from './contractABI.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contractAddress = "0x8084B71fd847053621f36a3A87DDC885f45A467D"; 
const abi = contractAbi;

const MyRecordOtherInformation = () => {
  const [otherInformation, setOtherInformation] = useState(null);

  const getOtherInformation = async () => {
    try {
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const patientAddress = await signer.getAddress(); // Get the currently connected wallet address

      const result = await contract.getOtherInformation(patientAddress);

      setOtherInformation({
        _title: result[0],
        _diagnosedDate: result[1].toNumber() * 1000, // Convert to Unix timestamp
        _disease: result[2],
        _description: result[3],
        _medication: result[4]
      });
    } catch (error) {
      console.error("Error fetching other information:", error);
      alert("Failed to fetch other information");
    }
  };

  return (
    <>
    <div className="my_record_other-information">
      <h3>Other Information</h3>
      <div className="disabilities_card">
        <img src={no_records} alt="" />
        {otherInformation ? (
          <>
            <p>Title: {otherInformation._title}</p>
            <p>Diagnosed Date: {new Date(otherInformation._diagnosedDate).toLocaleString()}</p>
            <p>Disease: {otherInformation._disease}</p>
            <p>Description: {otherInformation._description}</p>
            <p>Medication: {otherInformation._medication}</p>
          </>
        ) : (
          <p>No Record Yet</p>
        )}
      </div>
      <button onClick={getOtherInformation}>Fetch Other Information</button>
      </div>
    </>
  );
};

export default MyRecordOtherInformation;
