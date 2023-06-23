import React, { useState } from "react";
import "./registerpage.css";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../../assets/signup.jpg";
import { signUp } from "../../api/auth";
import store from "../../store/Index";
import { toast } from "react-toastify";
import Navbar from "../navbar/Navbar";

const Registerpage = () => {
  const navigate = useNavigate();
  const [signupDetails, setSignupDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (ev) => {
    setSignupDetails({
      ...signupDetails,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signUp(signupDetails);
      localStorage.setItem("token", res.data.token);
      store.userData = res.data.data.user;
      navigate("/connectwallet");
    } catch (e) {
      toast.error(e);
    }
  };
  //To toggle the Paasword visibility

  return (
    <div>
      <Navbar />
      <div className="medisync__registerpage">
        <div className="medisync__registerpage-logo"></div>
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
              <input
                value={signupDetails.password}
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                required
              />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                value={signupDetails.confirmPassword}
                onChange={handleChange}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
              />
              <button type="submit">Sign Up</button>
            </form>
            <Link to="/login">
              <button className="medisync__registerpage-login">
                Already have an Account? Log in
              </button>
            </Link>
            {/* {error && <p>{error}</p>} */}
          </div>
          <div className="medisync__registerpage-body_image">
            <img src={Signup} alt="Welcome" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
