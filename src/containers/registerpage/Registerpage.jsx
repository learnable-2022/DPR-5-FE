import React, { useState } from "react";
import './registerpage.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Welcome from '../../assets/welcome.png';

// import axios from 'axios';

const Registerpage = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const handleSignup = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('https://medisync-instance.onrender.com/api/v1/user/signup', {
  //       name,
  //       email,
  //       password
  //     });

  //     console.log(response.data); // Handle the successful response here

  //     // Reset the form
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  //     setError('');
  //   } catch (error) {
  //     console.error(error);
  //     setError('An error occurred. Please try again.'); // Handle the error here
  //   }
  // };

  const [signupDetails, setSignupDetails] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleChange = (ev) => {
    setSignupDetails({
      ...signupDetails,[ev.target.name]:ev.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      firstName:signupDetails.firstName,
      lastName:signupDetails.lastName,
      email:signupDetails.email,
      password:signupDetails.password,
      confirmPassword:signupDetails.confirmPassword
    } 

    fetch('https://medisync-instance.onrender.com/api/v1/user/signup',{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body:JSON.stringify(data)
    })
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      // console.log(data)
      setSignupDetails(data)
    })
    .catch((err)=>{
      console.log("Not sent", err)
    })
  }

  const userid = localStorage.setItem("id",signupDetails.data)
  // console.log(userid)

  return (
    <div>
      <div className="medisync__registerpage">
      <div className="medisync__registerpage-logo">
        <Link to="/"><img src={Logo} alt="Logo"/></Link>
      </div>
      <div className="medisync__registerpage-body">
        <div className="medisync__registerpage-body_form">
          <h1>Get Started</h1>
          <p>Fill the form below to sign up</p>
          
          <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
              <input value={signupDetails.firstName} onChange={handleChange} type="text" id="firstName" name="firstName" required/>

            <label htmlFor="LastName">Last Name</label>
              <input value={signupDetails.lastName} onChange={handleChange} type="text" id="lastName" name="lastName" required/>

            <label htmlFor="email">Email</label>
              <input value={signupDetails.email} onChange={handleChange} type="email" id="email" name="email" required/>

            <label htmlFor="password">Password</label>
              <input value={signupDetails.password} onChange={handleChange} type="password" id="password" name="password" required/>

            <label htmlFor="confirmPassword">Confirm Password</label>
              <input value={signupDetails.confirmPassword} onChange={handleChange} type="password" id="confirmPassword" name="confirmPassword" required/>
            <button type="submit" >Sign Up</button>

            {/* <span className="successful">{signupDetails.message}</span> */}
            {
              // (signupDetails.status==="fail") ? 
              // (<span className="successful">{signupDetails.message}</span>) : 
              // (<span className="successful">{signupDetails.status}</span>)
              (signupDetails.status==="success") ?
              (<Link to="/dashboard/connectwallet"><button type="submit">Connect Wallet</button></Link>) :
              (<span className="successful">{signupDetails.message}</span>)
            }
          </form>
          <Link to="/login">
            <button className='medisync__registerpage-login'>Already have an Account? Log in</button>
          </Link>
          {/* {error && <p>{error}</p>} */}
        </div>
        <div className="medisync__registerpage-body_image">
          <img src={Welcome} alt='Welcome'/>
        </div>
      </div>
      
    </div>
      
    </div>
  );

// const Registerpage = (props) => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log(email);
//   }

//   return (
//     <div className="medisync__registerpage">
//       <div className="medisync__registerpage-logo">
//         <img src={Logo} alt="Logo"/>
//       </div>
//       <div className="medisync__registerpage-body">
//         <div className="medisync__registerpage-body_form">
//           <h1>Get Started</h1>
//           <p>Fill the form below to sign up</p>
//           <form className='register-form' onSubmit={handleSubmit}>
//             <label htmlFor="name">Full Name</label>
//               <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />

//             <label htmlFor="email">Email</label>
//               <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />

//             <label htmlFor="password">Password</label>
//               <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
//             <button type="submit">Sign Up</button>
//           </form>
//           <Link to="/login">
//             <button className='medisync__registerpage-login'>Already have an Account? Log in</button>
//           </Link>
//         </div>
//         <div className="medisync__registerpage-body_image">
//           <img src={Welcome} alt='Welcome'/>
//         </div>
//       </div>
//     </div>
//   )
};

export default Registerpage