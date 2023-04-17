import React, {Component} from "react";
import ColorBox from "../ColorBox/ColorBox";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
        <div className="slider">
          <Slider defaultValue={level} min={100} max={900} onAfterChange={this.changeLevel} step={100}/>
        </div>
        
          {/* navbar goes here */}
          <div className="Palette-colors">
              {colorBoxes}
          </div>
          {/* footer eventually */}
        </div>
      );
  }
}