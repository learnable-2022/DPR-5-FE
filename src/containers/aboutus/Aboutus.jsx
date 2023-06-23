import React from 'react'
import './aboutus.css'
import About_us from '../../assets/aboutus.png'

const Aboutus = () => {
  return (
    <div className="aboutus">
        <hr />
        <div className="medisync__aboutus">
            <div className="medisync__aboutus_text">
                <h1>ABOUT US</h1>
                <p>
                    Medisync is a web based  blockchain platform used for record safe keeping where users can store their medical records without worrying about loosing it.
                </p>
                <p>
                   At Medisync we believe in putting the user first and meeting their needs once signed in on our platform.
                </p>
                <p>
                    Medisync values privacy,security and autonomy and that’s why with the use of a wallet address, we offer such services to our users.
                </p>
            </div>

            <div className="medisync__aboutus_image">
                <img src={About_us} alt="Doctor" />
            </div>
        </div>
    </div>
  )
}

export default Aboutus