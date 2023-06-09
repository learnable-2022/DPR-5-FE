import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import "../components/css/Welcome-style.css"
import Frame from '../Assets/Img/Frame.png'
import { useNavigate } from 'react-router-dom';


function Welcome() {
    const navigate = useNavigate();

            function handleClick(event) {
                 navigate('/getStarted');
             }
    return (
        <div className="app">
            <div className="content">
                <div className="left-content">
                    <div className="head-text">
                        <h1>Welcome!</h1>
                        <h3>Connect as user or as a clinic</h3>
                    </div>
                    <div className="sub-text">
                        <h5>
                        Are you a user looking forward to accessing your   
                        </h5>
                        <h5>
                        medical records at anytime despite your location?  
                        </h5>
                    </div>
                    <div className="btn-div">
                        <button className="green-button" type="button" onClick={handleClick} >Join as a patient</button>
                    </div>
                   {/* change start */}








                    {/* change stop  */}

                </div>
                <div className="right-content">
                    <img src={Frame} alt="Image" className="big-image"/>
                </div>
            </div>
        </div>
    )
}

export default Welcome