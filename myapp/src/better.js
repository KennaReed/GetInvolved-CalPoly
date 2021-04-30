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
        <h1>GetInvolved - Cal Poly </h1>
        <ul>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/forum">FORUM</Link>
          </li>
          <li>
            <Link to="/calendar">CALENDAR</Link>
          </li>
          <li>
            <Link to="/post">POST</Link>
          </li>
        </ul>

        <div className="logo-container">
          <a href="/post">
            <Logo class="logo"/>
          </a>
        </div>
      </div>
      <ul className="signin-up">
        <li className="sign-in">
          <a href="#" className="signup-btn">SIGN-IN</a>
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
