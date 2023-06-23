import React from 'react';
import './demo.css';
import Frame from '../../assets/frame.png';

import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <div className="medisync__demo_bg" 
      style={{ backgroundImage: `url(${Frame})` }}>
      <h1>
        Encrypted Health Management Platform
      </h1>
      <p>
        Medisync helps  thousands of individuals and save their  medical data, 
        symptoms, examination results and also share it with other authorized 
        wallet address despite location.It remains secure and safe with use of web3 and blockchain technology
      </p>
      <Link to="/web3"><button type='button'>Learn About Web3</button></Link>
    </div>
  )
}

export default Demo