import React from 'react';
import './feature.css';
import Privacy from '../../assets/privacy.png';

const Feature = () => {
  return (
    <div className="medisync__feature">
      <div className="medisync__feature-privacy">
        <div className="medisync__feature-image">
          <img src={Privacy} alt="Privacy" />
        </div>
          <div className="medisync__feature-text">
            <h1>Privacy</h1>
            <p>Your data is private to you</p>
          </div>
      </div>

      <div className="medisync__feature-privacy">
        <div className="medisync__feature-image">
          <img src={Privacy} alt="Privacy" />
        </div>
          <div className="medisync__feature-text">
            <h1>Secured Data</h1>
            <p>Save record with Web3</p>
          </div>
      </div>

      <div className="medisync__feature-privacy">
        <div className="medisync__feature-image">
          <img src={Privacy} alt="Privacy" />
        </div>
          <div className="medisync__feature-text">
          <h1>Share Record</h1>
          <p>Share record with wallet Address</p>
        </div>
      </div>
    </div>
  )
}

export default Feature