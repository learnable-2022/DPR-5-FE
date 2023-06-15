import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import Image1 from '../../assets/image1.png'

const Header = () => {
  return (
    <div className="medisync__header" >
        <div className="medisync__header-content">
          <h1>Take your Medical record to the next level with Web3 Technology.</h1>
          <p>Medisync simplifies healthcare by  collecting data , processing it and saving on the blockchain</p>
          <div className="medisync__header-content__demo">
          <Link to="/demo"><button type='button'>Request for Demo</button></Link>
          </div>
        </div>

        <div className="medisync__header-image">
          <img src={Image1} alt="Doctor and Patient" />
        </div>
    </div>
  )
}

export default Header