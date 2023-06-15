import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <>
  <p><NavLink exact to="/" activeClassName="active">Home</NavLink></p>
  <p><NavLink to="/about"  activeClassName="active">About</NavLink></p>
  <p><NavLink to="/demo"  activeClassName="active">Demo</NavLink></p>
  <p><NavLink to="/services"  activeClassName="active">Services</NavLink></p>
  </>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="medisync__navbar">
      <div className="medisync__navbar-container">
        <div className="medisync__navbar-left">
          <img src={logo} alt="logo" />

          <div className="medisync__navbar-links">
            <Menu />
          </div>
        </div>

        <div className="medisync__navbar-right">
          <Link to="/welcome"><button type="button">Get Started</button></Link>
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
                <Link to="/welcome"><button type="button">Get Started</button></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar