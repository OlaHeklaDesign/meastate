import React from 'react';
import './Offert.css';
import search_icon from '../Assets/search.svg';
import pig_icon from '../Assets/pig.svg';
import safe_icon from '../Assets/safe.svg';


const Offert = () => {
  return (
  <section class="offert" id='offert'>
    <h2>Real estate agency you can trust</h2>
    <div class="offert-container">
      <div class="offert-box">
        <div class="offert-box-image-container">
          <img src={search_icon} alt="search" />
        </div>
        <h4>Personalized Search</h4>
        <p>Find your dream apartment or home with us. We create a space where dreams of the perfect place become reality</p>
      </div>
      <div class="offert-box">
        <div class="offert-box-image-container">
          <img src={pig_icon} alt="search" />
        </div>
        <h4>Lowest Commissions</h4>
        <p>Uncover your perfect apartment or home with us. We transform dreams into reality, with the lowest commissions.</p>
      </div>
      <div class="offert-box">
        <div class="offert-box-image-container">
          <img src={safe_icon} alt="search" />
        </div>
        <h4>Transaction Security</h4>
        <p>Join us in realizing your dream home. With transaction security as a priority, we make dreams a reality.</p>
      </div>
    </div>
  </section>
  )
}

export default Offert