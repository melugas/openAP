import React from "react";
import { useRef, useState, useEffect } from "react";
import "../static/styles/about.css";
import "../static/styles/index.css";
import open_logo_blue from "../static/images/open_logo_blue.png";
import logo from "../static/images/logo.svg";
import open_O_gray from "../static/images/open_O_gray.svg";
import open_A_blue from "../static/images/open_A_blue.svg";
import open_O_blue from "../static/images/open_O_blue.svg";
import open_O_drkblue from "../static/images/open_O_drkblue.svg";
import open_opaque from "../static/images/open_opaque.svg";
import open_green from "../static/images/open_green.svg";
import open_logo_white from "../static/images/open_logo_white.png";
import bar from "../static/images/bar.svg";
import connect_blue from "../static/images/connect_blue.svg";
import connect_green from "../static/images/connect_green.svg";
import whoweare_A from "../static/images/whoweare_A.svg";
import whoweare_blue_bar from "../static/images/whoweare_blue_bar.svg";
import who_green_dot from "../static/images/who_green_dot.svg";
import who_gray_dot from "../static/images/who_gray_dot.svg";
import careers_open_circle from "../static/images/careers_open_circle.svg";
import careers_green_dot from "../static/images/careers_green_dot.svg";
import arrow from "../static/images/arrow.png";
import graybar from "../static/images/graybar.svg";
import Filter from "./Filter.js";
import SlideMenu from "./SlideMenu.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Story from "./Story.js";
import Header from "./Header.js";

class About extends React.Component {
  state = {
    hover: false
  };

  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  // careers list

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });

    console.log("hover", this.state.hover);
  };

  render() {
    const hoverState = this.state.hover;
    const btnClass = hoverState ? "active" : "";

    return (
      <div className="container">
        <Header />
        <section>
          <Story />
          <h1 className="open-logo">OpenAP</h1>
        </section>
        <div className="rectangle-lg" data-aos="fade-up"></div>
        <section>
          <div id="mission">
            <h1>Our Mission</h1>
            <img className="dot-gray-lg" data-aos="fade-right" />
            <img className="dot-green-sm" data-aos="fade-right" />
            <img
              src={open_O_drkblue}
              className="open-drk-blue"
              alt="open-O-drkblue"
              data-aos="zoom-out"
            />
            <h2>
              The industry has reached an inflection point for advanced
              advertising. <br />
              OpenAP is shaping the future of television by:
            </h2>
            <div className="rectangle-v"></div>
            <img className="dot-gray" data-aos="fade-up" />
            <img className="dot-gray-2" data-aos="fade-up" />
            <p className="left">
              Connecting publishers to offer the single largest advanced
              advertising platform in the U.S.
            </p>
            <img className="image-mission" />
          </div>
        </section>
        <img src={open_opaque} data-aos="zoom-in" className="opaque" />
        <img src={open_green} className="green" data-aos="fade-right" />
        <img src={graybar} data-aos="fade-up" className="graybar"></img>
        <section>
          <div id="values">
            <img
              src={whoweare_A}
              data-aos="fade-left"
              className="values-a"
            ></img>
            <h1>Our Values</h1>
            <button className="careersBtn">View Careers</button>
            <ul>
              <li>
                <img className="values-dot" />
                <a>Lorem ipsum</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>

              <li>
                <img className="values-dot" />
                <a>Consectetur</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>

              <li>
                <img className="values-dot" />
                <a>Magna aliqua</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>

              <li>
                <img className="values-dot" />
                <a>Dolor Sit amet</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <img
            src={whoweare_blue_bar}
            className="who-blue"
            data-aos="fade-right"
          ></img>
          <div id="whoweare">
            <br />
            <h1>Who we are</h1>
            <SlideMenu />
            <img
              src={who_green_dot}
              className="who-grn-dot"
              data-aos="zoom-out"
            ></img>
            <img
              src={who_gray_dot}
              className="who-gray-dot"
              data-aos="fade-left"
            ></img>
          </div>
        </section>
        <section>
          <div id="careers">
            <h1>Careers</h1>
            <h2>We are always looking for lorem ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="viewCareers">View Careers</button>
            <img className="ellipse-sm-connect" data-aos="fade-up"></img>
            <img
              src={careers_open_circle}
              data-aos="fade-right"
              className="open-careers"
            ></img>
            <img
              src={careers_green_dot}
              className="green-careers"
              data-aos="fade-up"
            ></img>
            <ul id="careers-list">
              <li className="careers-list-item">
                <span className="careers-list-item-text">
                  Director Marketing Communications
                </span>
                <a>New York</a>

               
              </li>
              <img className="divider" src={bar}></img>
              <li className="careers-list-item">
                VP, Platform Sales<a>New York</a>
              </li>

              <img className="divider" src={bar}></img>

              <li className="careers-list-item">
                Account Executive<a>Los Angeles</a>
              </li>

              <img className="divider" src={bar}></img>
            </ul>
          </div>
        </section>
        <section className="connect">
          <div className="connect">
            <a className="a1">Work with us</a>
            <a className="a2">Media Inquiries</a>
            <a className="a3">Support</a>
            <ul>
              <li>
                Ready to scale your advertising and get strong ROI? We're here
                to help you achieve it.
                <a style={{ fontColor: "white" }}>
                  Say hello<img className="arrow" src={arrow}></img>
                </a>
              </li>
              <li>
                Want to collaborate on a new partnership, event or story? Our
                Marketing Team can help.
                <a style={{ fontColor: "white" }}>
                  Let's talk<img className="arrow" src={arrow}></img>
                </a>
              </li>
              <li>
                Need help becoming an expert in OpenAP? Our Client Services Team
                has you covered.
                <a style={{ fontColor: "white" }}>
                  Get help<img className="arrow" src={arrow}></img>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <footer>
          <img src={open_logo_white} className="footer-logo" />
          <div>
            <div>
              <ul className="body-1">
                <a className="heading">Explore our site</a>
                <li>Sign In</li>
                <li>Schedule a Demo</li>
                <li>How it Works</li>
                <li>Insights</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <ul className="body-2">
                <a className="heading">Say hello</a>
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
              </ul>
            </div>
            <div>
              <ul className="body-3">
                <a className="heading">Connect with us</a>
                <li>
                  <a style={{ marginLeft: `3%` }}>LinkedIn</a>
                </li>
                <li>
                  <a style={{ marginLeft: `3%` }}>Twitter</a>
                </li>
                <li>
                  <a style={{ marginLeft: `3%` }}>Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default About;
