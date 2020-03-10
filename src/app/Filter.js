import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../static/styles/about.css";
import Staff from "./Staff.js";
import openAP1 from "../static/images/openAP1.png";
import openAP2 from "../static/images/openAP2.png";
import openAP3 from "../static/images/openAP3.png";
import openAP4 from "../static/images/openAP4.png";
import openAP5 from "../static/images/openAP5.png";
import openAP6 from "../static/images/openAP6.png";
import openAP7 from "../static/images/openAP7.png";
import orange from "../static/images/orange.png";
import dropdot from "../static/images/dropdot.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";


//THIS COMPONENT IS NOT BEING USED 

//Maps menu list items
export const Menu = (list, selected) =>
  list.map(el => {
    const { name, sector } = el;
    return (
      <MenuItem  text={name} key={name} selected={selected} sectorId={sector} />
    );
   
  }) ;

const selected = "OpenAP";
const sector = "OpenAPStaff";

const list = [
  { name: "OpenAP", sector: "OpenAPStaff" },
  { name: "Board of Directors", sector: "BoD" },
  { name: "Product Council", sector: "Product" },
  { name: "Advertiser Advisory Board", sector: "Advertiser" }
];

//Displays Menu 

const MenuItem = ({ text, selected }) => {
  return (
    <div className={`${selected ? "highlight": ""}`}>
      <div className={`menu-item ${selected ? "active" : ""}`}>{text}
      </div>
    </div>
  );
};

class HorizontalScroll extends React.Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(list, selected, sector);
  }

  state = {
    selected
  };

  //Animate on Scroll 
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }

//Sets selected state
  onSelect = key => {
    this.setState({
      selected: key
    });
  };

  // Menu Selector //
  chosenSector = selected => {
    console.log(selected);
    if (selected === "OpenAP") {
      return (
        <div>
          <Staff />
        </div>
      );
    }
    if (selected === "Board of Directors") {
      return (
        <div>
          <ul className="whoweare">
            <li>
              <img src={orange} className="whoweare-dot" />
            </li>
            <li>
              <img src={orange} className="whoweare-dot" />
            </li>
            <li>
              <img src={orange} className="whoweare-dot" />
            </li>
            <li>
              <img src={orange} className="whoweare-dot" />
            </li>
            <li>
              <img src={orange} className="whoweare-dot" />
            </li>
            <li>
              <img src={orange} className="whoweare-dot" />
            </li>
          </ul>
        </div>
      );
    }
    if (selected === "Product Council") {
      return (
        <div>
          <div className="whoweare">
            <ul className="whoweare">
              <li>
                <img src={orange} className="whoweare-dot" />
              </li>
              <li>
                <img src={dropdot} className="whoweare-dot" />
              </li>
              <li>
                <img src={dropdot} className="whoweare-dot" />
              </li>
              <li>
                <img src={dropdot} className="whoweare-dot" />
              </li>
              <li>
                <img src={dropdot} className="whoweare-dot" />
              </li>
              <li>
                <img src={orange} className="whoweare-dot" />
              </li>
            </ul>
          </div>
        </div>
      );
    }
    if (selected === "Advertiser Advisory Board") {
      return <Staff />;
    } else {
      return null;
    }
  };

  render() {
    const { selected } = this.state;

    // Create menu from items
    const menu = this.menuItems;

    return (
      <div>
        <ScrollMenu data={menu} selected={selected} onSelect={this.onSelect} />
        {this.chosenSector(selected)}
      </div>
    );
  }
}

export default HorizontalScroll;
