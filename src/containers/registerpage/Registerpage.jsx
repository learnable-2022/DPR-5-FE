import React, { useState } from "react";
import './registerpage.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Welcome from '../../assets/welcome.png';

const Registerpage = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

  return (
    <div className="medisync__registerpage">
      <div className="medisync__registerpage-logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="medisync__registerpage-body">
        <div className="medisync__registerpage-body_form">
          <h1>Get Started</h1>
          <p>Fill the form below to sign up</p>
          <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />

            <label htmlFor="password">Password</label>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">Sign Up</button>
          </form>
          <Link to="/login">
            <button className='medisync__registerpage-login'>Already have an Account? Log in</button>
          </Link>
        </div>
        <div className="medisync__registerpage-body_image">
          <img src={Welcome} alt='Welcome'/>
        </div>
      </div>
    </div>
  )
}

export default Registerpage