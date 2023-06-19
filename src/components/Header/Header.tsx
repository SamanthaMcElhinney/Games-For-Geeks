import React from "react";
import './Header.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {

    return (
      <header className="header-section">
        <Link to="/">
          <img
            className="header-image"
            src={logo}
            alt="logo Games for Geeks Games for Everyone in neon"
          />
        </Link>
      </header>
    );
}

export default Header