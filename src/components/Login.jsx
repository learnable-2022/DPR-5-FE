import React from 'react'
import { Link } from 'react-router-dom';
import Frame from '../Assets/Img/Frame.png'
import '../components/css/Login.css'

function Login() {
  return (
    <div className="content-LG">
        <div className="left-content-LG">
            <div className="head-text-LG">
                <h1>Login</h1>
            </div>
            <div className="fillInDetails">
                <form action="" className='input-section'>
                    <input name="name" placeholder=' Email' type="text" className='input-field' />      
                    <input name="name" placeholder=' Password' type="text"  className='input-field'/>      
                </form>
            </div>
            <div className="btn-tag">
                        <button className='signUp-btn'>Sign Up</button>   
                          <p>Don’t have an account?<Link style={{color:'green',textDecoration: 'none'}} to="/login">Sign Up</Link></p>  
                        </div>    
        </div>
        <div className="right-content-LG">
            <img src={Frame} alt="Image" className="big-image"/>
        </div>
    </div>
  )
}

export default Login