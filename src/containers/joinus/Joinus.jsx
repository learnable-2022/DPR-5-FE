import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './joinus.css';

const Joinus = () => {
    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm('service_6qqzkpp', 'template_aua4rvl', form.current, 'GJo2Q12wkHi0pT6Wu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  return (
    <div className="medisync__joinus">
      <h2>Newsletter</h2>
      <h1>JOIN US</h1>
      <p>Get informed about our latest services or product</p>
      <div className="medisync__joinus_input">
        <form ref={form} onSubmit={sendEmail}>
          <input type='email' placeholder='Your email' name='user_email' required/>
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Joinus