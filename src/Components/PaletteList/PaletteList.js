import React, {Component} from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";
import "./PaletteList.css"

class PaletteList extends Component {

     /* ---------- Render ---------- */
     render () {
        const {palette} = this.props
        return (

            palette.map((p) => (
                    <MiniPalette {... p}/>
                )
            )
        )
     }
}

export default PaletteList;