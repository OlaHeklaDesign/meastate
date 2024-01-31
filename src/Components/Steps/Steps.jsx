import React from 'react';
import './Steps.css';
import steps_img from '../Assets/steps-img.png';


const Steps = () => {
  return (
  <div className="steps-bg-container">
    <section className="steps">
      <div className="steps-main">
        <div className="steps-left">
          <h2>3 steps<br />to your dream home</h2>
          <img src={steps_img} alt="" />
        </div>
        <div className="steps-right">
          <div className="step-container">
            <div className="step-number">
              <p>1</p>
            </div>
            <div className="step-content">
              <p className="step-name">Property Search</p>
              <p className="step-description">
                Choose a property through the website or by working with an agent. Focus on location, size and price.
              </p>
            </div>
          </div>
          <div className="step-container">
            <div className="step-number">
              <p>2</p>
            </div>
            <div className="step-content">
              <p className="step-name">Viewing the Property with an Agent</p>
              <p className="step-description">
                Make an appointment with an agent who will present you with a selection of properties, answer your questions and provide an expert opinion.
              </p>
            </div>
          </div>
          <div className="step-container">
            <div className="step-number">
              <p>3</p>
            </div>
            <div className="step-content">
              <p className="step-name">Contract Signing and Formalities</p>
              <p className="step-description">
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