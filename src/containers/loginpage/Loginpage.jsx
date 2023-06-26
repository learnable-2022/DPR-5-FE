import React, { useState } from "react";

import "./loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import Welcome from "../../assets/welcome.jpg";
import Navbar from "../navbar/Navbar";
import { logIn } from "../../api/auth";
import store from "../../store/Index";
import { toast } from "react-toastify";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loginpage = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (ev) => {
    setLoginDetails((prevData) =>({
    ...prevData,[ev.target.name] : ev.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email:loginDetails.email,
      password:loginDetails.password,
    }

    setLoading(true)
    try {
      const res = await logIn(loginDetails);
      localStorage.setItem("token", res.token);
      store.userData = res.data.data.user;
      navigate("/connectwallet");
    } catch (error) {
      toast.error(error);
    }

    try {
      const res=await fetch('https://medisync-instance.onrender.com/api/v1/user/login',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        body:JSON.stringify(data)
      })
      const userData=await res.json()
        setLoginDetails((prev)=>{
        return{...prev, ...userData}
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // I cmmented this off because it was affecting the Dashboard page
  //  const userid = localStorage.setItem("id",loginDetails.data)
  // // console.log(userid)

  return (
    <>
      <Navbar />
      <div className="medisync__loginpage">
        {/* <div className="medisync__loginpage-logo">
        <Link to ="/"><img src={Logo} alt="Logo"/></Link>
      </div> */}
        <div className="medisync__loginpage-body">
          <div className="medisync__loginpage-body_form">
            <h1>Login</h1>

            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                value={loginDetails.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                required
              />

              <label htmlFor="password">Password</label>
              <div className="password">
                <input
                  value={loginDetails.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className="button"
                />
                <span onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <RiEyeOffFill size={20} />
                  ) : (
                    <RiEyeFill size={20} />
                  )}
                </span>
              </div>
              <button type="submit">Login</button>
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
                loginDetails.status === "success" ? 
                 navigate("/connectwallet")
                : (
                  <span className="successful">{loginDetails.message}</span>
                )
              }
            </form>
            <Link to="/register">
              <div className="medisync__loginpage-login">
                <p>Don’t have an account?</p>
                <p className="medisync__loginpage-login-signup">Sign up</p>
              </div>
            </Link>
          </div>
          <div className="medisync__loginpage-body_image">
            <img src={Welcome} alt="Welcome" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
