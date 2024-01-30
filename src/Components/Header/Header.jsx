import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Assets/logo.svg';
import mobile_menu from '../Assets/mobile-menu.svg';


const Header = () => {
  return (
    <div className="header-bg">
      <header>
        <Link style={{textDecoration: "none"}} to='/'><img src={logo} alt="logo"/></Link>
        <div class="header-right desktop-nav">
          <ul>
            <li>
              <a href="">BUY</a>
            </li>
            <li>
              <a href="">SELL</a>
            </li>
            <li>
              <a href="">RENT</a>
            </li>
            <li>
              <a href="#offert">AGENCY</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
          <button>contact with us</button>
        </div>
        <div class="mobile-nav">
          <img src={mobile_menu} alt="menu" />
          <div>
            <ul>
              <li>
                <a href="">BUY</a>
              </li>
              <li>
                <a href="">SELL</a>
              </li>
              <li>
                <a href="">RENT</a>
              </li>
              <li>
                <a href="#offert">AGENCY</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header