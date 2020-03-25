import React from "react";
import "../static/styles/about2.css";

const carouselItems = [{ text: "Connecting publishers to offer the single largest advanced advertising platform in the U.S. ", image: '' }, { text: "Lorem ipsum... ", image: '' }];

 class MissionCarousel extends React.Component {
    state = {
        list: [{}],
        selected: null,
        isVisible: false
      };
    
      componentDidMount = () => {
        this.setState({ list: carouselItems });
        console.log(carouselItems);
      };
    
      handleClick = key => {
        this.setState({
          selected: key
        });
      };
    
      toggleActiveItem = () => {
        this.setState(prevState => ({ isVisible: !prevState.isVisible }));
      };
    
      render() {
        const { selected, isVisible, list } = this.state;
    
        return (
          <div className="carousel-container">
            <ul id="carousel">
              {Object.values(list).map(
                (item, key) => (
                  console.log(item, key, list[1]),
                  (
                    <div
                      id="items-list"
                      // className={isVisible ? "" : "hidden"}
                      // onClick={this.toggleActiveItem}
                    >
                      <li
                        key={key}
                        value={item}
                        className={`list-group-item ${
                          key === selected ? "active" : ""
                        }`}
                        onClick={() => this.handleClick(key)}
                      >
                       {item.text}, {item.image}
                      </li>
                    </div>
                  )
                )
              )}
            </ul>
          </div>
        );
      }
    }

 export default MissionCarousel;