import React from 'react';
import './Contact.css';


const Contact = () => {

  return (
    <div class="contact-bg-container" id='contact'>
    <section class="contact">
      <div class="contact-left">
        <h2>Haven't you found your dream home?</h2>
        <p>Write us what you are looking for<br/>and we'll find what you need.</p>
      </div>
      <div class="contact-right">
        <div class="contact-name-email-box">
          <input type="text" placeholder="names" />
          <input type="email" placeholder="email address" />
        </div>
        <div class="contact-message" contenteditable="true">
          <p>apartment description</p>
          <p>Name of district, number of sqft, what rooms, any additional preferences will be appreciated</p>
        </div>
        <button>send message</button>
      </div>
    </section>
  </div>
  )
}

export default Contact