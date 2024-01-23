import React from 'react';
import './Header.css';
import logo from '../Assets/logo.svg';


const Header = () => {
  return (
    <div className="header-bg">
      <header>
        <img src={logo} alt="logo"/>
        <div class="header-right">
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
              <a href="">AGENCY</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
          <button>contact with us</button>
        </div>
      </header>
    </div>
  )
}

export default Header