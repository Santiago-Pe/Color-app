import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
class SinglePalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        console.log( this._shades)
    }

   /* ---------- Functions ---------- */ 
    gatherShades(palette, colorToFilterBy){
        // TODO
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1)

    }
  /* ---------- Render ---------- */
  render() {
    const colorBoxes = this._shades.map(color => (
        <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false}/>
    ))
    return (
        <div className="Palette">
            <div className="Palette-colors">
                {colorBoxes}
            </div>
        </div>
        
    );
  }
}

export default SinglePalette;
