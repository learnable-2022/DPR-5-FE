import React from 'react'
import './whatweb3.css'
import Web3 from '../../assets/web3.png';

const Whatweb3 = () => {
  return (
    <div className="web3">
        <hr />
        <div className="medisync__whatweb3">
            <div className="medisync__whatweb3-text">
                <h1>WHAT IS BLOCKCHAIN?</h1>
                    <p>
                        Blockchain is a decentralized technology that supports a secure and transparent 
                        record-keeping system. Medsync is developed with Blockchain technology because
                        we value our users privacy and overall security.  
                        Connecting to your wallet gives you total control over your data stored on the blockchain as 
                        you will be able to determine who has access to it and when the person can access it.
                    </p>

                <h1>WHAT IS A WALLET?</h1>
                    <p>
                        A blockchain wallet is a unique and private digital wallet that is used by a user(patient) 
                        to store data on the blockchain. You can think of it as your bank account (Blockchain wallet) 
                        that allows you to store money(your data) in the bank(the blockchain).
                    </p>

                <h1>WHAT IS A WALLET ADDRESS?</h1>
                    <p>
                        A wallet address serves as a unique identifier associated with a your digital wallet on the blockchain, 
                        ensuring secure storage and transfer of digital assets. Having your data on Medsync, blockchain and wallet 
                        addresses enhance privacy, data integrity, and  control(mostly as a patient). Your overall data can be securely stored, 
                        accessed, and shared, while wallet addresses grant You ownership of their health information. This empowers You to 
                        control who can access their data, promoting trust, and efficient healthcare processes within our decentralized EHR ecosystem.
                    </p>
            </div>
            <div className="medisync__whatweb3-image">
                <img src={ Web3 } alt='Web3' />
            </div>
        </div>
    </div>
  )
}

export default Whatweb3