/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {IoChatbubble as Logo} from 'react-icons/io5';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <h1>GetInvolved - Cal Poly</h1>
          <a href="/post">
            <Logo class="logo" />
          </a>
        </div>

        <ul>
          <li>
            <Link to="/home">HOME</Link>
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
        <li className="sign-in">
          <a href="#">SIGN-IN</a>
        </li>
        <li>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
