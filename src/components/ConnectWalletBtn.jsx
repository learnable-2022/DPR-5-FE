import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ethers } from "ethers";

const ConnectWallet = () => {
  const [data, setdata] = useState({
    address: "",
    balance: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const btnhandler = () => {
    setIsLoading(true);
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching the first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => getWalletDetails(res[0]))
        .catch((error) => {
          // Handle error
          alert(error.message);

          // Stop loader if error occured
          // For example, when user cancelled request
          // and closed plugin
          setIsLoading(false);
        });
    } else {
      window.open("https://metamask.io/download/", "_blank");
    }
  };

  const getWalletDetails = (address) => {
    // Requesting balance method in
    // a right format with help of ethers
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance and address
        setdata({
          address,
          balance: ethers.formatEther(balance),
        });
      });

    setIsLoading(false);
  };

  return (
    <Container>
      {/* only show connect wallet button when wallet is not yet connected */}
      {!data.address && (
        <ConnectBtn onClick={() => btnhandler()}>
          {/* <img src="./images/metamask.png" alt="metamask logo" /> */}
          Connect Wallet
          <Loading id="loading" $isloading={isLoading}>
            <span>&bull;</span>
            <span>&bull;</span>
            <span>&bull;</span>
          </Loading>
        </ConnectBtn>
      )}
      {data.balance && <span>{data.balance}</span>}
      {data.address && <span>{data.address}</span>}

      {/* mobile warning for metamask pluggin, implement after deployment */}
      {/* <MobileWarning id="mobileDeviceWarning">
        If you are on a mobile phone, please use MetaMask application's browser
        to connect.
      </MobileWarning> */}
    </Container>
  );
};

export default ConnectWallet;

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

const ConnectBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  box-shadow: 0 1px 5px 0 #e6e9ef;
  background: #ffffff;
  color: #eb874b;
  border-radius: 99px;
  padding: 16px 32px;
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  font-weight: 500;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

// const MobileWarning = styled.div`
//   display: none;
//   margin-top: 24px;
//   color: rgb(247, 47, 47);

//   .show {
//     display: block;
//   }
// `;

/* Loading dots styles animation */
const animateOpacity = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const Loading = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ $isloading }) => ($isloading ? `flex` : `none`)};
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 99px;

  span:not(:last-child) {
    margin-right: 5px;
  }

  span {
    animation-name: ${animateOpacity};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  span:nth-child(2) {
    animation-delay: 100ms;
    animation-delay: 100ms;
  }

  span:nth-child(3) {
    animation-delay: 300ms;
    animation-delay: 300ms;
  }
`;
