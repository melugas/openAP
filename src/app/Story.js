import React from "react";
import open_logo_blue from "../static/images/open_logo_blue.png";
import logo from "../static/images/logo.svg";
import open_O_gray from "../static/images/open_O_gray.svg";
import open_A_blue from "../static/images/open_A_blue.svg";
import open_O_blue from "../static/images/open_O_blue.svg";
import open_O_drkblue from "../static/images/open_O_drkblue.svg";
import open_opaque from "../static/images/open_opaque.svg";
import open_green from "../static/images/open_green.svg";
import open_logo_white from "../static/images/open_logo_white.png";

const Story = () =>{
    return(
    <div id="story">
            <span>
              <img className="image-url" />
            </span>
            
            <h2>
              The advanced advertising company bringing simplicity and scale  to
              audience-based campaigns in television
            </h2>
            <button className="button">Schedule a demo</button>
            <div>
              <div
                className="rectangle"
                data-aos="fade-right"
                alt="rectangle"
              ></div>
              <div
                className="ellipse-lg"
                data-aos="fade-up"
                alt="ellipse-lg"
              ></div>
              <div
                className="ellipse-sm"
                data-aos="fade-up"
                alt="ellipse-sm"
              ></div>
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
                data-aos="fade-up"
                src={open_O_blue}
                alt="open_O_blue"
              />
              <img className="ellipse-lg-gray" data-aos="fade-up" />
              <img className="ellipse-sm-right" data-aos="fade-up" />
            </div>
            <h1>Our Story</h1>
            <p>
              Founded and owned by TV's largest publishers, we are today a
              collective of seasoned leaders focused on building a company that
              will fundamentally change the way advertising is bought and sold
              on television. Together with the support of our members Fox,
              NBCUniversal, ViacomCBS and Univision, our mission is to bring
              simplicity and scale to audience-based campaigns in television.
            </p>
          </div>
         
    )
}
export default Story;