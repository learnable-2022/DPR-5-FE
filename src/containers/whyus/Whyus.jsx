import React from 'react';
import './whyus.css';

import Doc1 from '../../assets/doc1.png';
import Doc2 from '../../assets/doc2.png';
import Doc3 from '../../assets/doc3.png';

const Whyus = () => {
  return (
    <div className="medisync__whyus">
      <h1>Why Choose Our Platform?</h1>
      <p>
        View and save your medical information on our secured portal, 
        empowering you to actively engage in your healthcare decisions.
      </p>
      <div className="medisync__whyus-tabs">
          <div className="medisync__whyus-tabs_tab">
            <div className="medisync__whyus-tabs_tab-image">
              <img src={Doc1} alt="Doc" />
            </div>
            <h1>Autonomous control of Record</h1>
            <p>
              User has full access over record and authorizes all that happens on it
            </p>
          </div>

          <div className="medisync__whyus-tabs_tab">
            <div className="medisync__whyus-tabs_tab-image">
              <img src={Doc2} alt="Doc" />
            </div>
            <h1>Encrypted  records</h1>
            <p>
              Records stored on the block chain cant be tamperd with or hacked
            </p>
          </div>

          <div className="medisync__whyus-tabs_tab">
            <div className="medisync__whyus-tabs_tab-image">
              <img src={Doc3} alt="Doc" />
            </div>
            <h1>Access limit control</h1>
            <p>
              User adds,removes and grants access to authorised wallets on the record
            </p>
          </div>
      </div>
    </div>
  )
}

export default Whyus