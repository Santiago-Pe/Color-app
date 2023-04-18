import React, {Component} from "react";
import Slider from 'rc-slider';
 /* ---------- Material UI ---------- */
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
 /* ---------- Styels ---------- */
import 'rc-slider/assets/index.css';
import "./Navbar.css"

class Navbar extends Component {
    constructor(props){
        super(props);
        /* ---------- States ---------- */
        this.state = {format: "hex" }
        /* ---------- Binding Functions ---------- */
        this.handleChange = this.handleChange.bind(this)

    }
    /* ---------- Fucntions as props ---------- */
    handleChange (evt) {
        this.setState({ format: evt.target.value });
        this.props.handleChange( evt.target.value )
    }
    /* ---------- render ---------- */
    render() {
        // Destructuring props and states
        const {level, changeLevel, handleChange} = this.props
        const {format} = this.state

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
            <div className="select-container">
                <Select onChange={this.handleChange} value={format} >
                <MenuItem value="hex">HEX - #FFF</MenuItem>
                <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>
           
            </header>
        )
    }
}

export  default Navbar;