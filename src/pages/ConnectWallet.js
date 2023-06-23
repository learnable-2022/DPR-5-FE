import React, { useState } from "react";
import "../css/styles.css";
import store from "../store/Index";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { toast } from "react-toastify";
import metamaskImg from "../assets/metamask.png";

const ConnectWallets = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const btnhandler = () => {
    setIsLoading(true);
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching the first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          store.userWalletAddress = res[0];
          setIsLoading(false);
          navigate("/dashboard");
        })
        .catch((error) => {
          // Handle error
          toast(error.message);
          setIsLoading(false);
        });
    } else {
      window.open("https://metamask.io/download/", "_blank");
    }
  };
  return (
    <div className="wallet_details main_container">
      <ConnectBtn onClick={() => btnhandler()}>
        <BtnLabel $isloading={isLoading}>
          <img src={metamaskImg} alt="metamask logo" /> Connect Wallet
        </BtnLabel>
        <Loading id="loading" $isloading={isLoading}>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
        </Loading>
      </ConnectBtn>
    </div>
  );
};

export default ConnectWallets;

const ConnectBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 178px !important;
  font-size: 24px;
  padding: 12px 18px;
  font-weight: 500;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const BtnLabel = styled.span`
  display: ${({ $isloading }) => ($isloading ? `none` : `flex`)};
  align-items: center;
  gap: 12px;

  & > img {
    width: 25px;
    height: 25px;
  }
`;

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
  /* background: #fff; */

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
