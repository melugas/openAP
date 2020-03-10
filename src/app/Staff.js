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
      <div className="open">
        <ul className="open">
          <li>
            <img src={openAP1} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `black`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
          </li>

          <li>
            <img src={openAP2}className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `black`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
          </li>
          <li>
            <img src={openAP3} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `black`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
          </li>
          <li> 
            <img src={openAP4} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `black`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
          </li>
          <li>
            <img src={openAP5} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `black`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
          </li>
          <li>
            <img src={openAP6} className="whoweare-dot" />
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `black`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
          </li>
          <li>
              <img src={openAP7} className="whoweare-dot" />
              <h4 style={{display: `flex`, position: `absolute`, marginLeft: `60px`}}>David Levy</h4>
            <h4 style={{display: `flex`, position: `absolute`, marginLeft: `10px`, marginTop: `50px`, color: `black`, fontWeight: `normal`}}>Cheif Executive Officer</h4>
            </li>
        </ul>
      </div>
  
  );
};

export default Staff;
