import React, {Component} from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./Navbar.css"

class Navbar extends Component {

    /* ---------- render ---------- */
    render() {
        // Destructuring props and states
        const {level, changeLevel} = this.props
        return(
            <header className="Navbar">
            <div className="logo">
                <a href="">ColorLab</a>
            </div>
            <div className="slider-contianer">
                <span>Level: {level}</span>
                <div className="slider">
                <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100}/>
                </div>
            </div>
            
            </header>
        )
    }
}

export  default Navbar;