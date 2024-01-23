import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <div class="contact-bg-container">
    <section class="contact">
      <div class="contact-left">
        <h2>Let Us Know What Real Estate You Need</h2>
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