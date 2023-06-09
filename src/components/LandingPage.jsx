import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import "../Components/css/Auth-style.css"
import logo from '../Assets/Img/logo.png'
import GetStarted from './GetStarted';
import Auth from './Welcome';
import Login from './Login';


function LandingPage() {
  return (
    <div>
        <header>
                <img src={logo} alt="Logo" className="logo" />
            </header>
            <Auth/>
            <GetStarted/>
            <Login/>
            
    </div>
  )
}

export default LandingPage