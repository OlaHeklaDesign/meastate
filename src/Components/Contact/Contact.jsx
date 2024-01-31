import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';


const Contact = () => {

  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_qw2awi7', 'template_g1jtd55', form.current, '5yKegLgQNAhBuNB7d')
      .then(
        (result) => {
          setSuccessMessage('Your message has been sent.');
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);

          setFormValues({
            user_name: '',
            user_email: '',
            message: '',
          });

        },
        (error) => {
          setErrorMessage('Something went wrong.');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
        }
      );
  };

  return (
    <div className="contact-bg-container" id='contact'>
    <section className="contact">
      <div className="contact-left">
        <h2>Haven't you found your dream home?</h2>
        <p>Write us what you are looking for and we'll find what you need.</p>
      </div>
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-name-email-box">
            <input  type="text" 
                    placeholder="names" 
                    name="user_name"
                    value={formValues.user_name}
                    onChange={handleInputChange} />
            <input  type="email" 
                    placeholder="email address" 
                    name="user_email"
                    value={formValues.user_email}
                    onChange={handleInputChange} />
          </div>
          <textarea placeholder='Name of district, number of sqft, what rooms, any additional preferences will be appreciated'
                    name="message"
                    value={formValues.message}
                    onChange={handleInputChange}></textarea>
          <button type="submit" value="Send">send message</button>
          <p className='contact-form-message'>{successMessage}</p>
          <p className='contact-form-message'>{errorMessage}</p>
        </form>
      </div>
    </section>
  </div>
  )
}

export default Contact