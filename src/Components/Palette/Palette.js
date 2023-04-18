import React, {Component} from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import "./Palette.css"

export default class Palette extends Component {
  constructor (props){
    super(props);
    /* ---------- States ---------- */
    // State to tracking de scale of my color
    this.state = {
      level: 500,
      format: "rgb"
    }

    /* ---------- Binding Functions ---------- */
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  /* ---------- Functions ---------- */
  // Changes levels of color scale
  changeLevel (level) {
    this.setState({level})
  }
  // Change color format
  changeFormat (val) {
    this.setState({format: val})
  }
  
  /* ---------- Render ---------- */
  render () {
    // Destructuring props and states
      const {colors, paletteName, emoji} = this.props.pallet;
      const {level, format} = this.state;


      // Creat new array of colors and pass down props
      const colorBoxes = colors[level].map(color => (
          <ColorBox background={color[format]} name={color.name} key={color.id}/>
      ));

      return (
        <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
        
          {/* navbar goes here */}
          <div className="Palette-colors">
              {colorBoxes}
          </div>
          <footer className="Palette-footer">
            {paletteName}
            <span className="emoji">{emoji}</span>
          </footer>
        </div>
      );
  }
}