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

  const handleButtonClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="header-bg">
      <header>
        <Link style={{textDecoration: "none"}} to='/'><img src={logo} alt="logo"/></Link>
        <div className="header-right desktop-nav">
          <ul>
            <li>
              <a href="/meastate/#steps">STEPS</a>
            </li>
            <li>
              <a href="/meastate/#testimonials">TESTIMONIALS</a>
            </li>
            <li>
              <a href="/meastate/#offert">AGENCY</a>
            </li>
            <li>
              <a href="/meastate/#contact">CONTACT</a>
            </li>
          </ul>
          <button onClick={handleButtonClick}>contact with us</button>
        </div>
        <div className="mobile-nav">
          <img src={mobile_menu} alt="menu" onClick={toggleMobileMenu} />
          {isMobileMenuOpen &&
          <div>
            <ul>
              <li>
                <a href="/meastate/#steps">STEPS</a>
              </li>
              <li>
                <a href="/meastate/#testimonials">TESTIMONIALS</a>
              </li>
              <li>
                <a href="/meastate/#offert">AGENCY</a>
              </li>
              <li>
                <a href="/meastate/#contact">CONTACT</a>
              </li>
            </ul>
          </div>}
        </div>
      </header>
    </div>
  )
}

export default Header