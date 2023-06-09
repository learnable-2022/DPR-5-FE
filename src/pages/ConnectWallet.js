import React, { useEffect, useState } from "react";
import "../css/styles.css";


const getWallet = () => window.ethereum;
const eth = getWallet();



const ConnectWallet = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
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
    <div className="wallet_details main_container" >
      <button className="connect" onClick={connectWallet}>
        Connect Wallet</button>
    </div>
  );
};

export default ConnectWallet;
