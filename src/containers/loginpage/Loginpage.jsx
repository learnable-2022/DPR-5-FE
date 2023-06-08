import React, { useState } from "react";
import './loginpage.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Welcome from '../../assets/welcome.png';

const Loginpage = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

  return (
    <div className="medisync__loginpage">
      <div className="medisync__loginpage-logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="medisync__loginpage-body">
        <div className="medisync__loginpage-body_form">
          <h1>Login</h1>
          
          <form className='login-form' onSubmit={handleSubmit}>
            
            <label htmlFor="email">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />

            <label htmlFor="password">Password</label>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">Login</button>
          </form>
          <Link to="/register">
            <button className='medisync__loginpage-login'>Don’t have an account? Sign up</button>
          </Link>
        </div>
        <div className="medisync__loginpage-body_image">
          <img src={Welcome} alt='Welcome'/>
        </div>
      </div>
    </div>
  )
}

export default Loginpage