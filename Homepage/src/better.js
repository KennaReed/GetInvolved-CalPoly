import React, { useState } from "react";
import {IoChatbubble as Logo} from 'react-icons/io5';
import {Link, Route} from "react-router-dom";
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

        <ul>
          <li>
            <Link to={"/home"} activeStyle={{color:"red"}}>HOME</Link>
          </li>
          <li>
            <Link to="/post">POST</Link>
          </li>
          <li>
            <Link to="/forum">FORUM</Link>
          </li>
          <li>
            <Link to="/calendar">CALENDAR</Link>
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