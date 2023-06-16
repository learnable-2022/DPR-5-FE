import React, { useEffect, useState } from "react";
import "./wallet.css";
import { Link } from 'react-router-dom'
import Logo from '../../assets/medisync-logo.png'


const getWallet = () => window.ethereum;
const eth = getWallet();



const Wallet = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const Wallet = async () => {
    if (typeof eth !== "undefined") {
      const accounts = await eth.request({
        method: "eth_requestAccounts",
      });

      //setCheck(1);

      setCurrentAccount(accounts[0]);
      alert("welcome User " + accounts[0]);
    } else {
      alert("🔴Metamask Not Installed, Please Add Metamask To Your Browser 🔴");
    }
  };
  return (
    <div className="medisync__wallet_details" >
      <img src={Logo} alt="Logo"/>

      <div className="medisync__wallet_detail">
        <h2>
          To activate your account, you have to click the 
          button below to connect your Wallet address Or create a wallet account if you don’t have one
        </h2>
        <Link to='/web3'><p>What is a Wallet?</p></Link>
        <button className="connect" onClick={Wallet}>
          Connect Wallet</button>
      </div>
    </div>
  );
};

export default Wallet;
