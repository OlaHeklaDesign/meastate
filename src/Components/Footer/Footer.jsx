import React from 'react';
import './Footer.css';
import logo from '../Assets/logo-footer.svg';
import mail_icon from '../Assets/mail_icon.svg';
import phone_icon from '../Assets/phone_icon.svg';
import pin_icon from '../Assets/pin_icon.svg';
import fb_icon from '../Assets/fb.svg';
import yt_icon from '../Assets/yt.svg';
import ig_icon from '../Assets/ig.svg';
import white_logo from '../Assets/footer-logo-bg.svg';


const Footer = () => {
  return (
  <footer>
    <div class="footer-logo-copy-container">
      <img src={logo} alt="logo" />
      <p>mestate @2023 all right reserved</p>
    </div>
    <div class="footer-contact-container">
      <h3>Contact</h3>
      <div class="footer-contacts">
        <div class="footer-contact">
          <img src={phone_icon} alt="phone icon"/>
          <p>+ 45 345 2545 34</p>
        </div>
        <div class="footer-contact">
          <img src={mail_icon} alt="mail icon"/>
          <p>office@estate.fo</p>
        </div>
        <div class="footer-contact">
          <img src={pin_icon} alt="pin icon"/>
          <p>ul. Maślana 43<br/>34-645 Warsaw</p>
        </div>
      </div>
      <div class="footer-socials">
        <div class="footer-social">
          <img src={fb_icon} alt="fb icon"/>
        </div>
        <div class="footer-social">
          <img src={yt_icon} alt="yt icon"/>
        </div>
        <div class="footer-social">
          <img src={ig_icon} alt="ig icon"/>
        </div>
      </div>
    </div>
    <div class="footer-menu-container">
      <h3>Links</h3>
      <ul>
        <li>
          <a href="">buy</a>
        </li>
        <li>
          <a href="">sell</a>
        </li>
        <li>
          <a href="">rent</a>
        </li>
        <li>
          <a href="">agency</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
      </ul>
    </div>
    <div class="footer-info-container">
      <h3>Information & Legal</h3>
      <a href="">privacy police</a>
      <a href="">terms and conditions</a>
    </div>
    <img className='footer-logo' src={white_logo} alt="logo"/>
  </footer>
  )
}

export default Footer