import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./PaletteList.css"

class PaletteList extends Component {

     /* ---------- Render ---------- */
     render () {
        const {palette} = this.props
        return (
            palette.map((p) => {
               
                return (
                <Link to={`/palette/${p.id}`}>
                    <h3>{p.paletteName}</h3>
                </Link>
                )
            })
        )
     }
}

export default PaletteList;