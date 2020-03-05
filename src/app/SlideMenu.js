import React, { useState, useRef } from "react";
import "../static/styles/about.css";
import Staff from "./Staff.js";

const list = [
  "OpenAP",
  "Board of Directors",
  "Product Council",
  "Advertiser Advisory Board"
];


export default function SlideMenu() {
  const [currentOption, setCurrentOption] = useState("OpenAP");


/*   //Resize 
const useResize = (currentOption) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
  
    const useEffect = (() => {
      const handleResize = () => {
        setWidth(currentOption.current.offsetWidth)
        setHeight(currentOption.current.offsetHeight)
      }
  
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [currentOption])
  
    return { width, height }
  }  */


  // Display Menu //
  const activeItem = currentOption => {
    if (currentOption === "OpenAP") {
      return <Staff />;
    }
    if (currentOption === "Board of Directors") {
      return <Staff />;
    }
    if (currentOption === "Product Council") {
      return <Staff />;
    }
    if (currentOption === "Advertiser Advisory Board") {
      return <Staff />;
    } else {
      return;
    }
  };

  return (
    <div>
      <div id="whoweare" className="menu-item">
        <ul className="menu-item">
          {list.map(name => {
            return (
              <li
                key={name}
              
                className={`menu-item ${
                  name === currentOption ? "active" : ""}`}
                onClick={() => setCurrentOption(name)}
              >
                {name}
              </li>
            );
          })}
          <span
            id="highlight"
            style={{
                transform: `translateX(${list.indexOf(currentOption) * 100}%)`
            }}
          />
        </ul>
      </div>
      <div>{activeItem(currentOption)}</div>
    </div>
  );
}

