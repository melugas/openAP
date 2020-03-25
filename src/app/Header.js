import React from "react";
import "../static/styles/about.css";
import "../static/styles/index.css";
import open_logo_blue from "../static/images/open_logo_blue.png";
import logo from "../static/images/logo.svg";

//ToDo: use this component to separate top nav menu from About.js
const Header = () => {
  return (
   <React.Fragment>
     <header>
          <img src={open_logo_blue} className="logo" alt="open-logo-blue" />
           <nav className="header headerMenu">
            <ul>
              <li><a href="/aboutalt">How it works</a></li>
              <img src={logo} alt="logo"></img>
              <li>Insights</li>
              <img src={logo} alt="logo"></img>
              <li>About Us</li>
              <img src={logo} alt="logo"></img>
              <li>Schedule a Demo</li>
              <img src={logo} alt="logo"></img>
              <li>
                <a href="https://www.openaptvapp.com/">Sign In</a>
              </li>
            </ul>
          </nav>
        </header>
  </React.Fragment>
  );
};

export default Header;
