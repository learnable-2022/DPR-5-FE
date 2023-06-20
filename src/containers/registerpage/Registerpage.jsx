import React, { useState } from "react";
import "./registerpage.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/medisync-logo.png";
import Signup from "../../assets/signup.jpg";
import { signUp } from "../../api/auth";
import store from "../../store/Index";
import { toast } from "react-toastify";
import { snapshot } from "valtio";

// import axios from 'axios';

const Registerpage = () => {
  const navigate = useNavigate();
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
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
    // if(){
    //   fbbfnbdfd
    //   return
    // }

    // const payload = {
    //   firstName: signupDetails.firstName,
    //   lastName: signupDetails.lastName,
    //   user: snap.userData._id,
    // };

    try {
      const res = await signUp(signupDetails);
      localStorage.setItem("token", res.data.token);
      store.userData = res.data.data.user;
      navigate("/dashboard");
    } catch (e) {
      toast.error(e);
    }
  };

  // const userid = localStorage.setItem("id", signupDetails.data);
  // console.log(userid)
//To toggle the Paasword visibility
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="medisync__registerpage">
        <div className="medisync__registerpage-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="medisync__registerpage-body">
          <div className="medisync__registerpage-body_form">
            <h1>Get Started</h1>
            <p>Fill the form below to sign up</p>

            <form className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input
                value={signupDetails.firstName}
                onChange={handleChange}
                type="text"
                id="firstName"
                name="firstName"
                required
              />

              <label htmlFor="LastName">Last Name</label>
              <input
                value={signupDetails.lastName}
                onChange={handleChange}
                type="text"
                id="lastName"
                name="lastName"
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
              <input value={signupDetails.password} onChange={handleChange} type="password" id="password" name="password" required/>

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

            {/* <span className="successful">{signupDetails.message}</span> */}
            {
              // (signupDetails.status==="fail") ? 
              // (<span className="successful">{signupDetails.message}</span>) : 
              // (<span className="successful">{signupDetails.status}</span>)
              (signupDetails.status==="success") ?
              (<Link to="/connectwallet"><button type="submit">Connect Wallet</button></Link>) :
              (<span className="successful">{signupDetails.message}</span>)
            }
          </form>
          <Link to="/login">
            <button className='medisync__registerpage-login'>Already have an Account? Log in</button>
          </Link>
          {/* {error && <p>{error}</p>} */}
        </div>
        <div className="medisync__registerpage-body_image">
          <img src={Signup} alt='Welcome'/>
        </div>
      </div>
    </div>
  );
};

// const Registerpage = (props) => {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);

//     return (
//       <div className="medisync__registerpage">
//         <div className="medisync__registerpage-logo">
//           <img src={Logo} alt="Logo" />
//         </div>
//         <div className="medisync__registerpage-body">
//           <div className="medisync__registerpage-body_form">
//             <h1>Get Started</h1>
//             <p>Fill the form below to sign up</p>
//             <form className="register-form" onSubmit={handleSubmit}>
//               <label htmlFor="name">Full Name</label>
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 type="text"
//                 id="name"
//                 name="name"
//               />

//               <label htmlFor="email">Email</label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 id="email"
//                 name="email"
//               />

//               <label htmlFor="password">Password</label>
//               <input
//                 value={pass}
//                 onChange={(e) => setPass(e.target.value)}
//                 type="password"
//                 id="password"
//                 name="password"
//               />
//               <button type="submit">Sign Up</button>
//             </form>
//             <Link to="/login">
//               <button className="medisync__registerpage-login">
//                 Already have an Account? Log in
//               </button>
//             </Link>
//           </div>
//           <div className="medisync__registerpage-body_image">
//             {/* <img src={Welcome} alt="Welcome" /> */}
//           </div>
//         </div>
//       </div>
//     );
//   };
// };

export default Registerpage;
