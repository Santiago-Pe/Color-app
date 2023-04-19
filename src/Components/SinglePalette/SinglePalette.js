import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";
import { Link } from "react-router-dom";
class SinglePalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
    /* ---------- State ---------- */
    this.state = {
        format: "hex"
    }
    /* ---------- Binding Functions ---------- */
    this.changeFormat = this.changeFormat.bind(this);
  }

  /* ---------- Functions ---------- */
  gatherShades(palette, colorToFilterBy) {
    // TODO
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  // Change color format
  changeFormat(val) {
    this.setState({ format: val });
  }

  /* ---------- Render ---------- */
  render() {
    const {format} = this.state
    const {paletteName, emoji, id} = this.props.palette
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showFullPalettte={false}
      />
    ));
    return (
      <div className="Single-palette Palette">
        <Navbar
          handleChange={this.changeFormat}
          showingAllColors={false}
        />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link className="back-button" to={`/palette/${id}`}> GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default SinglePalette;
