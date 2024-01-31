import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Assets/logo.svg';
import mobile_menu from '../Assets/mobile-menu.svg';


const Header = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header-bg">
      <header>
        <Link style={{textDecoration: "none"}} to='/'><img src={logo} alt="logo"/></Link>
        <div className="header-right desktop-nav">
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
        <div className="mobile-nav">
          <img src={mobile_menu} alt="menu" onClick={toggleMobileMenu} />
          {isMobileMenuOpen &&
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
          </div>}
        </div>
      </header>
    </div>
  )
}

export default Header