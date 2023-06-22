import React, { useState } from "react";
import './registerpage.css';
import { Link, useNavigate } from 'react-router-dom';
import Signup from '../../assets/signup.jpg';
import Navbar from '../navbar/Navbar';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


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
  const navigate = useNavigate();
  
 const[loading,setLoading] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    fullName: "",
    email: "",
    password: ""
  });


   // handle loading effect
   const openLoading = () => {
    setLoading(true)
    }
  
    const closeLoading = () => {
      setLoading(false)
    }
  const handleChange = (ev) => {
    setSignupDetails({
      ...signupDetails,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullName:signupDetails.fullName,
      email:signupDetails.email,
      password:signupDetails.password,
    } 

    fetch("https://medisync-instance.onrender.com/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setSignupDetails(data);
      })
      .catch((err) => {
        console.log("Not sent", err);
      });
  };

  const userid = localStorage.setItem("id", signupDetails.data);
  // console.log(userid)
//To toggle the Paasword visibility
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar />
      <div className="medisync__registerpage">
      {/* <div className="medisync__registerpage-logo">
        <Link to="/"><img src={Logo} alt="Logo"/></Link>
      </div> */}
      <div className="medisync__registerpage-body">
        <div className="medisync__registerpage-body_form">
          <h1>Get Started</h1>
          <p>Fill the form below to sign up</p>
          
          <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
              <input value={signupDetails.fullName} onChange={handleChange} type="text" id="fullName" name="fullName" required/>


            <label htmlFor="email">Email</label>
              <input value={signupDetails.email} onChange={handleChange} type="email" id="email" name="email" required/>

            <label htmlFor="password">Password (At least 8 Characters)</label>
              <div className="password"><input value={signupDetails.password}
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange} id="password" name="password" required/>
              <button onClick={togglePasswordVisibility}>
                {showPassword ? <RiEyeOffFill size={20}/> : <RiEyeFill size={20}/>}
              </button>
              </div>

            <button type="submit" onClick={openLoading} >Sign Up</button>

            {/* <span className="successful">{signupDetails.message}</span> */}
            {
            loading ? (<Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open onClick={closeLoading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>) 
            :
            null
            }
            {
              // (signupDetails.status==="fail") ? 
              // (<span className="successful">{signupDetails.message}</span>) : 
              // (<span className="successful">{signupDetails.status}</span>)
              (signupDetails.status==="success") ?
              navigate("/dashboard/connectwallet") :
              (<span className="successful">{signupDetails.message}</span>)
            }
          </form>
          <Link to="/login">
            <div className='medisync__registerpage-login'>
              <p>Already have an Account?</p>
              <p className="medisync__registerpage-login-signup">Log in</p>
            </div>
          </Link>
          {/* {error && <p>{error}</p>} */}
        </div>
        <div className="medisync__registerpage-body_image">
          <img src={Signup} alt='Welcome'/>
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

export default Registerpage;
