import React from 'react';
import './benefits.css';
import Laptop from '../../assets/laptop.png'
import Call from '../../assets/call.png'
import Privacy from '../../assets/privacy.png'
import { Link } from 'react-router-dom';

const Benefits = () => {
  return (
    <div className='medisync__benefits'>
      <div className="medisync__benefits-text">
        <h1>
          Securing records With Web3 technology.
        </h1>
        <p>
          With Medisync medical records are saved and health issues are tracked. Share your health record 
          with a third party with your permission.
        </p>
      </div>
      
      <div className="medisync__benefits-tabs">
        <div className="medisync__benefits-tabs_tab">
          <div className="medisync__benefits-tabs_tab-icon">
            <img src={Laptop} alt="Laptop" />
          </div>
          <p>Save Your Health Records Online and Offline</p>
            <Link to="/welcome"><button type='button'>Explore</button></Link>
        </div>

        <div className="medisync__benefits-tabs_tab">
          <div className="medisync__benefits-tabs_tab-icon">
            <img src={Call} alt="Call" />
          </div>
          <p>Connect  with a  Wallet</p>
          <Link to="/welcome"><button type='button'>Explore</button></Link>
        </div>

        <div className="medisync__benefits-tabs_tab">
          <div className="medisync__benefits-tabs_tab-icon">
            <img src={Privacy} alt="Privacy" />
          </div>
          <p>Your Health Record protected with Blockchain security</p>
          <Link to="/welcome"><button type='button'>Explore</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Benefits