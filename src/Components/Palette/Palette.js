import React, {Component} from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import "./Palette.css"

export default class Palette extends Component {
  constructor (props){
    super(props);
    /* ---------- States ---------- */
    // State to tracking de scale of my color
    this.state = {level: 500}

    /* ---------- Binding Functions ---------- */
    this.changeLevel = this.changeLevel.bind(this);
  }

  /* ---------- Functions ---------- */
  changeLevel (level) {
    this.setState({level})
  }
  
  /* ---------- Render ---------- */
  render () {
    // Destructuring props and states
      const {colors} = this.props.pallet;
      const {level} = this.state;


      // Creat new array of colors and pass down props
      const colorBoxes = colors[this.state.level].map(color => (
          <ColorBox background={color.hex} name={color.name} key={color.name}/>
      ));

      return (
        <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel}/>
        
          {/* navbar goes here */}
          <div className="Palette-colors">
              {colorBoxes}
          </div>
          {/* footer eventually */}
        </div>
      );
  }
}