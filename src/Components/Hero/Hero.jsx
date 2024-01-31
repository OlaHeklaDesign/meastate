import React from 'react';
import './Hero.css';
import hero_img from '../Assets/hero-img.png';
import HeroSearchBar from '../HeroSearchBar/HeroSearchBar';



const Hero = () => {
  return (
    <div className="hero-bg">
      <section className="hero">
        <div className="hero-left">
          <div>
            <div className="hero-left-headling-box">
              <div className="hero-left-headling-firstline">
                <h1>Buy</h1>
                <div className="hero-headling-square"></div>
                <h1>Sell</h1>
                <div className="hero-headling-square"></div>
                <h1>Rent</h1>
              </div>
              <h1>it can't get any simpler</h1>
            </div>
            <p className="hero-left-description">Find your dream apartment or home with us. We create a space where dreams of the perfect place become reality</p>
            <HeroSearchBar />
          </div>
          <div className="hero-left-bottom">
            <div>
              <p className="hero-left-bottom-maintext">+2000</p>
              <p className="hero-left-bottom-addtext">satisfied<br />renters</p>
            </div>
            <div>
              <p className="hero-left-bottom-maintext">+500</p>
              <p className="hero-left-bottom-addtext">sold<br />properties</p>
            </div>
          </div>
          <div className="hero-left-square"></div>
        </div>
        <div className="hero-right">
          <img src={hero_img} alt="" />
          <div className="hero-right-imgbg"></div>
        </div>
      </section>
    </div>
  )
}

export default Hero