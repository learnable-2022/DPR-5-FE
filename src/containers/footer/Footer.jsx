import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png';
import Linkedin from '../../assets/linkedin.png';
import Whatsapp from '../../assets/whatsapp.png';

// import Facebook from '../../assets/facebook.png';
// import Twitter from '../../assets/twitter.png';
// import Instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <div className="medisync__footer">
      <div className="medisync__footer_sections">
        <div className="medisync__footer_sections_contact">
          <div className="medisync__footer_sections_contact-logo">
            <img src={Logo} alt="logo" />
          </div>
          <p>
            Keep your health under control.
          </p>
          <div className="medisync__footer_sections_contact-icons">
            <a href="https://wa.me/+2349061404988" target="blank"><img src={Whatsapp} alt="Whatsapp" /></a>
            <a href="https://www.linkedin.com/in/medisync-incoporation-70616527a" target="blank"><img src={Linkedin} alt="Linkedin" /></a>
            {/* <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" /> */}
          </div>
        </div>

        <div className="medisync__footer_sections_section">
          <h1>Company</h1>
          <Link to="/about"><p>About Us</p></Link>
          <Link to="/demo"><p>Demo</p></Link>
        </div>

        <div className="medisync__footer_sections_section">
          <Link to="/services"><h1>Services</h1></Link>
          <Link to="/services"><p>Privacy</p></Link>
          <Link to="/services"><p>Anonymity</p></Link>
          <Link to="/services"><p>Security</p></Link>
        </div>

      </div>

      <div className="medisync__footer-copyright">Copyright @2023 MediSync</div>
    </div>
  )
}

export default Footer