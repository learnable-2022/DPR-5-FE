import React, { useState } from "react";
import "./registerpage.css";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../../assets/signup.jpg";
import { signUp } from "../../api/auth";
import store from "../../store/Index";
import { toast } from "react-toastify";
import Navbar from "../navbar/Navbar";
import { RiEyeOffFill, RiEyeFill } from "react-icons/ri";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Registerpage = () => {
  const navigate = useNavigate();

  const [loading,setLoading] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (ev) => {
    setSignupDetails((prevData) =>({
    ...prevData,[ev.target.name] : ev.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullName:signupDetails.fullName,
      email:signupDetails.email,
      password:signupDetails.password,
      confirmPassword:signupDetails.confirmPassword
    }

    setLoading(true)
    try {
      const res = await signUp(signupDetails);
      localStorage.setItem("token", res.data.token);
      store.userData = res.data.data.user;
      navigate("/connectwallet");
    } catch (e) {
      toast.error(e);
    }

    try {
      const res=await fetch('https://medisync-instance.onrender.com/api/v1/user/signup',{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body:JSON.stringify(data)
    })
    const userData=await res.json()
      setSignupDetails((prev)=>{
        return{...prev, ...userData}
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

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
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div> */}
        <div className="medisync__registerpage-body">
          <div className="medisync__registerpage-body_form">
            <h1>Get Started</h1>
            <p>Fill the form below to sign up</p>

            <form className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full Name</label>
              <input
                value={signupDetails.fullName}
                onChange={handleChange}
                type="text"
                id="fullName"
                name="fullName"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                value={signupDetails.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                required
              />

            <label htmlFor="password">Password (At least 8 Characters)</label>
            <div className="password">
              <input
                value={signupDetails.password} 
                onChange={handleChange} 
                type={showPassword ? "text" : "password"} 
                id="password"
                name="password" 
                required
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <RiEyeOffFill size={20} />
                ) : (
                  <RiEyeFill size={20} />
                )}
              </span>
            </div>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password">
              <input 
                value={signupDetails.confirmPassword} 
                onChange={handleChange} 
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword" 
                required
              />

              <span onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <RiEyeOffFill size={20} />
                ) : (
                  <RiEyeFill size={20} />
                )}
              </span>
            </div>  

            <button type="submit" >Sign Up</button>

            {/* <span className="successful">{signupDetails.message}</span> */}
            {
            loading ? (<Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open 
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
              navigate("/connectwallet") :
              (<span className="successful">{signupDetails.message}</span>)
            }
          </form>
          <Link to="/login">
            <div className="medisync__registerpage-signup">
              <p>Already have an Account?</p>
              <p className="medisync__registerpage-signup-login">Log in</p>
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
};

export default Registerpage;
