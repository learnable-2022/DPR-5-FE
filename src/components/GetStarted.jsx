import React from 'react'
import { Link } from 'react-router-dom';
import Frame from '../Assets/Img/Frame.png'
// import "../Components/css/Auth-style.css"
import "../components/css/GetStarted.css"

function GetStarted() {

  
  return (
        <div className="content-GS">
            <div className="left-content-GS">
                <div className="head-text-GS">
                    <h1>Get Started</h1>
                    <h3>Fill the form below to sign up</h3>
                </div>
                <div className="fillInDetails">
                    <form action="" className='input-section'>
                        <label htmlFor="" className='label-tag'>  Full Name</label>
                        <input name="name" type="text"  className='input-field'/>     
                        <label htmlFor="" className='label-tag'> Email</label> 
                        <input name="name" type="text" className='input-field' />      
                        <label htmlFor="" className='label-tag'> Password</label> 
                        <input name="name" type="text" className='input-field' />      
                      

                        <div className="btn-tag">
                        <button className='signUp-btn'>Sign Up</button>   
                          <p>Already have an Account? <Link style={{color:'green',textDecoration: 'none'}} to="/login">Log in</Link></p>  
                        </div>    
                     </form>
                </div>
            </div>
            <div className="right-content-GS">
                <img src={Frame} alt="Image" className="big-image"/>
            </div>
        </div>
  )
}

export default GetStarted