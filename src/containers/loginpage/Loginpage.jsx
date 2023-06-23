import React, { useState } from "react";

import "./loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import Welcome from "../../assets/Welcome2.png";
import Navbar from "../navbar/Navbar";
import { logIn } from "../../api/auth";
import store from "../../store/Index";
import { toast } from "react-toastify";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Loginpage = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = (ev) => {
    setLoginDetails({
      ...loginDetails,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await logIn(loginDetails);
      localStorage.setItem("token", res.token);
      store.userData = res.data.data.user;
      navigate("/connectwallet");
    } catch (error) {
      toast.error(error);
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
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <RiEyeOffFill size={20} />
                  ) : (
                    <RiEyeFill size={20} />
                  )}
                </button>
              </div>
              <button type="submit">Login</button>
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
