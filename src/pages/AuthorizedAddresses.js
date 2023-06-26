import React, { useState } from "react";
import "../css/styles.css";
import contractAbi from "../components/contractABI.json";
import { ethers } from "ethers";

const contractAddress = "0x8084B71fd847053621f36a3A87DDC885f45A467D";
const abi = contractAbi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner(); // Get the signer from the provider
const contract = new ethers.Contract(contractAddress, abi, signer);

const GetAuthorizedAddresses = () => {
  const [userDetails, setUserDetails] = useState([]);

  const fetchUserDetails = async () => {
    try {
      // Fetch user details from the smart contract
      const fetchedUserDetails = await contract.getAuthorizedAddresses();
      setUserDetails(fetchedUserDetails);
    } catch (error) {
      alert("Failed to fetch user details from the smart contract");
    }
  };

  return (
    <div className="medical-records main_container">
      <button onClick={fetchUserDetails}>Authorized Addresses</button>
      {userDetails.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Wallet Address</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((user, index) => (
                <tr key={index}>
                  <th>Name</th>
                  <td>{user}</td>
                  <th>Wallet Address</th>
                  <th>Wallet Address</th>
                  <td>{index}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Other components */}
      <GetAuthorizedAddresses />
      {/* Other components */}
    </div>
  );
};

export default App;
