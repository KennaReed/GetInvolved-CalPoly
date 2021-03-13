import React, { useState } from "react";
import {IoChatbubble as Logo} from 'react-icons/io5';
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">HOME</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">POST</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">FORUM</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">CALENDAR</a>
          </li>
          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <Logo className="menu-icon" />
        ) : (
          <Logo className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;