import React from 'react';
import './Steps.css';
import steps_img from '../Assets/steps-img.png';


const Steps = () => {
  return (
  <div class="steps-bg-container">
    <section class="steps">
      <div class="steps-main">
        <div class="steps-left">
          <h2>3 steps<br />to your dream home</h2>
          <img src={steps_img} alt="" />
        </div>
        <div class="steps-right">
          <div class="step-container">
            <div class="step-number">
              <p>1</p>
            </div>
            <div class="step-content">
              <p class="step-name">Property Search</p>
              <p class="step-description">
                Choose a property through the website or by working with an agent. Focus on location, size and price.
              </p>
            </div>
          </div>
          <div class="step-container">
            <div class="step-number">
              <p>2</p>
            </div>
            <div class="step-content">
              <p class="step-name">Viewing the Property with an Agent</p>
              <p class="step-description">
                Make an appointment with an agent who will present you with a selection of properties, answer your questions and provide an expert opinion.
              </p>
            </div>
          </div>
          <div class="step-container">
            <div class="step-number">
              <p>3</p>
            </div>
            <div class="step-content">
              <p class="step-name">Contract Signing and Formalities</p>
              <p class="step-description">
                Choose your property, the agent will help with the finalization. Signing of contracts, documentation and payments will be handled with professional care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Steps