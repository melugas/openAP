import React, { useState, useRef, useCallback } from "react";
import "../static/styles/about.css";
import Staff from "./Staff.js";
import orange from "../static/images/orange.png";
import dropdot from "../static/images/dropdot.jpeg";
import placeholder from "../static/images/placeholder.png";

const list = [
  "OpenAP",
  "Board of Directors",
  "Product Council",
  "Advertiser Advisory Board"
];

export default function SlideMenu() {
  const [currentOption, setCurrentOption] = useState("OpenAP");
  const highlightRef = useRef();

  //Handles selecting menu item
  const handleClick = ({ currentTarget }) => {
    setCurrentOption(currentTarget.innerText);

    //Sets indicator size
    const offset = currentTarget.offsetLeft;
    const width = currentTarget.offsetWidth;
    moveIndicator(offset, width);
  };

  //Updates indicator size and style
  const moveIndicator = (offset, width) => {
    const highlightEl = highlightRef.current;
    highlightEl.style.width = `${width}px`;
    highlightEl.style.transform = `translateX(${offset}px)`;
  };

  // Display List //
  const activeItem = currentOption => {
    if (currentOption === "OpenAP") {
      return <Staff />;
    }
    if (currentOption === "Board of Directors") {
      return (
        <div>
          <div className="open">
            <ul className="open">
              <li>
                <img src={placeholder} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>

              <li>
                <img src={placeholder} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={placeholder} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={placeholder} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={placeholder} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={placeholder} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={placeholder} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    if (currentOption === "Product Council") {
      return (
        <div>
          <div className="open">
            <ul className="open">
              <li>
                <img src={dropdot} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>

              <li>
                <img src={dropdot} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={dropdot} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={dropdot} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={dropdot} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={dropdot} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={dropdot} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    if (currentOption === "Advertiser Advisory Board") {
      return (
        <div>
          <div className="open">
            <ul className="open">
              <li>
                <img src={orange} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>

              <li>
                <img src={orange} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={orange} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={orange} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={orange} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={orange} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
              <li>
                <img src={orange} className="whoweare-dot" />
                <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`, color: `black`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `gray`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return;
    }
  };

  console.log("render");
  return (
    <div>
      <div id="whoweare-menu">
        <ul id="slider-menu">
          {list.map(name => (
            <li
              key={name}
              className={`menu-item ${name === currentOption ? "active" : ""}`}
              onClick={handleClick}
            >
              <span className="menu-item-text">{name}</span>
            </li>
          ))}
          <span
            ref={highlightRef}
            id="highlight"
            style={{
              width: 178,
              transform: `translateX(${5}px)`
            }}
          />
        </ul>
      </div>
      <div>{activeItem(currentOption)}</div>
    </div>
  );
}
