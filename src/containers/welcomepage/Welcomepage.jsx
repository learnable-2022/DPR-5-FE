import React from 'react'
import './welcomepage.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Welcome from '../../assets/welcome.png'

const Welcomepage = () => {
  return (
    <div className="medisync__welcomepage">
      <div className="medisync__welcomepage-logo">
        <Link to="/"><img src={Logo} alt="Logo"/></Link>
      </div>
      <div className="medisync__welcomepage-body">
        <div className="medisync__welcomepage-body_text">
          <h1>Welcome!</h1>
          <h2>Connect as a user </h2>
          <p>Are you a user looking forward to accessing your medical records at anytime despite your location?</p>
          <Link to="/register"><button type="button">Join as a User</button></Link>
        </div>
        <div className="medisync__welcomepage-body_image">
          <img src={Welcome} alt='Welcome'/>
        </div>
      </div>
    </div>
  )
}

export default Welcomepage