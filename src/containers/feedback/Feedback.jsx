import React from 'react';
import './feedback.css';
import Client1 from '../../assets/client1.png'
import LeftArrow from '../../assets/left-arrow.png'
import RightArrow from '../../assets/right-arrow.png'

const Feedback = () => {
  return (
    <div className="medisync__feedback">
      <h1>
        What Our User Say About Us
      </h1>

      <div className="medisync__feedback_clients">
        <div className="arrow">
          <img src={LeftArrow} alt='Left arrow'/> 
        </div>

          <div className="medisync__feedback_client">
            <p>
              “Making use of Medisync platform is the best decisions I made as lifestyle blogger 
              because whenever I travel, I can always have access to my recent medical history”.
            </p> 
            
            <div className="medisync__feedback_client-Name">
              <h1>Hope Atam</h1>
              <p>Lifestyle Blogger</p>
            </div>
            <div className="medisync__feedback_client-image">
              <img src={Client1} alt="Client1" />
            </div>
          </div>

        <div className="arrow">
          <img src={RightArrow} alt='Right arrow'/> 
        </div>
      </div>
    </div>
  )
}

export default Feedback