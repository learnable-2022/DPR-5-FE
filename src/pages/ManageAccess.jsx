import React, { useState } from "react";
import "../css/styles.css";
import contractAbi from "../components/contractABI.json";
import { ethers } from "ethers";

const ManageAccess = () => {
  const abi = contractAbi;
  const contractAddress = "0x8084B71fd847053621f36a3A87DDC885f45A467D";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner(); // Get the signer from the provider
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");

  const grantAccess = async () => {
    try {
      await contract.grantAccess(name, address);
      // Access granted successfully
      alert("Access granted successfully");
    } catch (error) {
      // Handle error
      alert("Failed to grant access");
    }
  };

  const revokeAccess = async () => {
    try {
      await contract.revokeAccess(address2);
      // Access revoked successfully
      alert("Access revoked successfully");
    } catch (error) {
      // Handle error
      alert("Failed to revoke access");
    }
  };

  return (
    <div className="manage_access">
      <h5>
        To grant anyone access to see your details, please input <br /> the
        person's name and wallet address
      </h5>
      <form>
        <label htmlFor="name">
          <p>Name</p>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="address">
          <p>Wallet Address</p>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </form>
      <button onClick={grantAccess}>Grant Access</button>
      <h5>To revoke anyone's access, please input the wallet address</h5>
      <form>
        <label htmlFor="address2">
          <p>Wallet Address</p>
          <input
            type="text"
            id="address2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </label>
      </form>
      <button onClick={revokeAccess}>Revoke Access</button>
    </div>
  );
};

export default ManageAccess;
