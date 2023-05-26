import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#">For Patients</a></p>
  <p><a href="#">For Doctors</a></p>
  <p><a href="#">About</a></p>
  <p><a href="#">Services</a></p>
  </>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="medisync__navbar">
      <div className="medisync__navbar-container">
        <div className="medisync__navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="medisync__navbar-links">
          <Menu />
        </div>
        <div className="medisync__navbar-wallet">
          <button type="button">Connect Wallet</button>
        </div>
      </div>
      <div className="medisync__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#460570" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#460570" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="medisync__navbar-menu_container .scale-up-ver-top">
            <div className="medisync__navbar-menu_container-links">
              <Menu />
              <div className="medisync__navbar-menu_container-links-wallet">
                <button type="button">Connect Wallet</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar