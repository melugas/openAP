import React from "react";
import open_logo_blue from "./static/images/open_logo_blue.png";


//ToDo: use this component to separate top nav menu from About.js
const Header = () => {
  return (
    <div id="container">
      <header>
      <img src={open_logo_blue} alt="open-logo-blue" />
      <ul>
        <li className="focused">How it works</li>
        <li>Insights</li>
        <li>About Us</li>
        <li>Schedule a Demo</li>
        <li>
          <a href="https://www.openaptvapp.com/">Sign In</a>
        </li>
      </ul>
      </header>
    </div>
  );
};

export default Header;
