import React from 'react';
import './Hero.css';
import hero_img from '../Assets/hero-img.png';



const Hero = () => {
  return (
    <div className="hero-bg">
      <section class="hero">
        <div class="hero-left">
          <div>
            <div class="hero-left-headling-box">
              <div class="hero-left-headling-firstline">
                <h1>Buy</h1>
                <div class="hero-headling-square"></div>
                <h1>Sell</h1>
                <div class="hero-headling-square"></div>
                <h1>Rent</h1>
              </div>
              <h1>it can't get any simpler</h1>
            </div>
            <p class="hero-left-description">Find your dream apartment or home with us. We create a space where dreams of the perfect place become reality</p>
          </div>
          <div class="hero-left-bottom">
            <div>
              <p class="hero-left-bottom-maintext">+2000</p>
              <p class="hero-left-bottom-addtext">satisfied<br />renters</p>
            </div>
            <div>
              <p class="hero-left-bottom-maintext">+500</p>
              <p class="hero-left-bottom-addtext">sold<br />properties</p>
            </div>
          </div>
          <div class="hero-left-square"></div>
        </div>
        <div class="hero-right">
          <img src={hero_img} alt="" />
          <div class="hero-right-imgbg"></div>
        </div>
      </section>
    </div>
  )
}

export default Hero