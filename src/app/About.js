import React from "react";
import "../static/styles/about.css";
import open_logo_blue from "../static/images/open_logo_blue.png";
import logo from "../static/images/logo.svg";
import open_O_gray from "../static/images/open_O_gray.svg";
import open_A_blue from "../static/images/open_A_blue.svg";
import open_O_blue from "../static/images/open_O_blue.svg";
import open_O_drkblue from "../static/images/open_O_drkblue.svg";
import open_opaque from "../static/images/open_opaque.svg";
import open_green from "../static/images/open_green.svg";
import open_logo_white from "../static/images/open_logo_white.png";
import Filter from "./Filter.js";
import SlideMenu from "./SlideMenu.js"
import AOS from "aos";
import "aos/dist/aos.css";

class About extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <img src={open_logo_blue} className="logo" alt="open-logo-blue" />
          <nav className="header headerMenu">
            <ul>
              <li>How it works</li>
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
        <section className="story">
          <div className="story">
            <span>
              <img className="image-url" />
            </span>
            <h2>
              The advanced advertising company bringing simplicity and scale  to
              audience-based campaigns in television
            </h2>
            <button className="button">Schedule a demo</button>
            <div>
              <div className="rectangle" data-aos="fade-up"></div>
              <div className="ellipse-lg" data-aos="fade-up"></div>
              <div className="ellipse-sm" data-aos="fade-up"></div>
              <img
                className="open-gray"
                data-aos="fade-up"
                src={open_O_gray}
                alt="open_O_gray"
              />
              <img
                className="open-blue"
                data-aos="fade-up"
                src={open_A_blue}
                alt="open_O_gray"
              />
              <img
                className="open-o-blue"
                src={open_O_blue}
                alt="open_O_blue"
              />
              <img className="ellipse-lg-gray" />
              <img className="ellipse-sm-right" />
              {/* <span className="circle dot"></span> */}
            </div>
            <h1 className="story">Our Story</h1>
            <p className="story">
              Founded and owned by TV's largest publishers, we are today a
              collective of seasoned leaders focused on building a company that
              will fundamentally change the way advertising is bought and sold
              on television. Together with the support of our members Fox,
              NBCUniversal, ViacomCBS and Univision, our mission is to bring
              simplicity and scale to audience-based campaigns in television.
            </p>
          </div>
          <h1 className="open-logo">OpenAP</h1>
        </section>
        <div className="rectangle-lg" data-aos="fade-up"></div>
        <section className="mission">
          <div className="mission">
            <h1 className="mission">Our Mission</h1>
            <img className="dot-gray-lg" />
            <img className="dot-green-sm" />
            <img
              src={open_O_drkblue}
              className="open-drk-blue"
              alt="open-O-drkblue"
            />
            <h2 className="mission">
              The industry has reached an inflection point for advanced
              advertising. OpenAP is shaping the future of television by:
            </h2>
            <img className="rectangle-v" />
            <img className="dot-gray" />
            <img className="dot-gray-2" />
            <p className="left">
              Connecting publishers to offer the single largest advanced
              advertising platform in the U.S.
            </p>
            <img className="image-mission" />
          </div>
        </section>
        <img src={open_opaque} className="opaque" />
        <img src={open_green} className="green" />
        <section className="values">
          <div className="values">
            <h1 className="values">Our Values</h1>

            <img className="values-dot1" />
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
            <img className="values-dot2" />
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
            <img className="values-dot3" />
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
            <img className="values-dot4" />
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="whoweare">
            <br />
            <h1>Who we are</h1>
           {/*  <Filter /> */}
           <SlideMenu/>
          </div>
        </section>
      {/*   <SlideMenu/> */}
        <section>
          <div className="careers">
            <h1 className="careers">Careers</h1>
            <h2 className="careers">
              We are always looking for lorem ipsum dolor.
            </h2>
            <p className="careers">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 className="careers">VP, Platform Sales</h3>
          </div>
        </section>
        <section>
          <div className="connect"></div>
        </section>
        <footer>
          <img src={open_logo_white} className="footer-logo" />
          <ol className="footer">
            {<strong>Explore our site</strong>}
            <li>
              <a href="https://www.openaptvapp.com/">Sign In</a>
            </li>
            <li>Schedule a Demo</li>
            <li>How it Works</li>
            <li>Insights</li>
            <li>About Us</li>
          </ol>
          <ol>
            {<strong>Say Hello</strong>}
            <br />
            <li>
              <strong>New York</strong>
            </li>
            <li>29 W 17th St</li>
            <li>Fourth Floor</li>
            <li>New York, NY 10011</li>
            <br />
            <li>
              <strong>Los Angeles</strong>
            </li>
            <li>10250 Constellation Blvd</li>
            <li>Los Angeles, Ca 90066</li>
          </ol>
          <ol>
            {<strong>Connect with us</strong>}
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ol>
        </footer>
      </div>
    );
  }
}

export default About;
