import React from "react";
import "../static/styles/about.css";
import openAP1 from "../static/images/openAP1.png";
import openAP2 from "../static/images/openAP2.png";
import openAP3 from "../static/images/openAP3.png";
import openAP4 from "../static/images/openAP4.png";
import openAP5 from "../static/images/openAP5.png";
import openAP6 from "../static/images/openAP6.png";
import openAP7 from "../static/images/openAP7.png";
import orange from "../static/images/orange.png";

const Staff = () => {
  return (
    <div>
      <div className="open">
        <ul className="open">
          <li>
            <img src={openAP1} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`}}>David Levy</h4>
          </li>

          <li>
            <img src={openAP2}className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`}}>David Lev!y</h4>
          </li>
          <li>
            <img src={openAP3} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`}}>David Levy</h4>
          </li>
          <li> 
            <img src={openAP4} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`}}>David Levy</h4>
          </li>
          <li>
            <img src={openAP5} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`}}>David Levy</h4>
          </li>
          <li>
            <img src={openAP6} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`}}>David Levy</h4>
          </li>
          <li>
              <img src={orange} className="whoweare-dot" />
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Staff;
