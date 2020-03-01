import React from "react";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "../static/styles/about.css";


export const Menu = (list, selected) =>
    list.map(el => {
      const {name} = el;
   
      return <MenuItem text={name} key={name} selected={selected} />;
    });

    const selected = 'OpenAP';

    const list = [
      {name: "OpenAP"},
      {name: "Board of Directors"},
      {name: "Product Council"},
      {name: "Advertiser Advisory Board"}
    ]

const MenuItem = ({text, selected}) => {
      return <div
        className={`menu-item ${selected ? 'active' : ''}`}
        >{text}</div>;
    };
 
  
class Scrollbar extends React.Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected,
    dragging: true
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }

  render() {
    const { selected, dragging } = this.state;

    // Create menu from items
    const menu = this.menuItems;

    return (
        //filter options - menu bar
          <div>
            <ScrollMenu
              data={menu}
              selected={selected}
              onSelect={this.onSelect}
              dragging={dragging}
            />
          </div>

    //content to pull 
    
    )}
}

export default Scrollbar;
