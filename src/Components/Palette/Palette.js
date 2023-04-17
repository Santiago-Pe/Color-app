import React, {Component} from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.css"

export default class Palette extends Component {
    /* ---------- Render ---------- */
    render () {

        // Creat new array of colors and pass down props
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name}/>
        ));
        return (
          <div className="Palette">
            {/* navbar goes here */}
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            {/* footer eventually */}
          </div>
        );
    }
}