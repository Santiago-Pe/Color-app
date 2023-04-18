import React, {Component} from "react";
import Slider from 'rc-slider';
import { Link } from "react-router-dom";
 /* ---------- Material UI ---------- */
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
 /* ---------- Styels ---------- */
import 'rc-slider/assets/index.css';
import "./Navbar.css"

class Navbar extends Component {
    constructor(props){
        super(props);
        /* ---------- States ---------- */
        // State for saving color formats and managing notifications.
        this.state = {format: "hex", open: false}
        /* ---------- Binding Functions ---------- */
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)

    }
    /* ---------- Fucntions ---------- */
    //Explciar
    closeSnackbar () {
        this.setState({open: false})
    }
    /* ---------- Fucntions as props ---------- */
     //Explciar
    handleFormatChange (evt) {
        this.setState({ format: evt.target.value, open: true });
        this.props.handleChange( evt.target.value )
    }
    /* ---------- render ---------- */
    render() {
        // Destructuring props and states
        const {level, changeLevel} = this.props
        const {format} = this.state

        return (
          <header className="Navbar">
            <Link className="logo" to={"/"}>
              <span>ColorLab</span>
              <span className="material-icons">palette</span>
            </Link>
            <div className="slider-contianer">
              <span>Level: {level}</span>
              <div className="slider">
                <Slider
                  defaultValue={level}
                  min={100}
                  max={900}
                  onAfterChange={changeLevel}
                  step={100}
                />
              </div>
            </div>
            <div className="select-container">
              <Select onChange={this.handleFormatChange} value={format}>
                <MenuItem value="hex">HEX - #FFF</MenuItem>
                <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                <MenuItem value="rgba">
                  RGBA - rgba(255, 255, 255, 1.0)
                </MenuItem>
              </Select>
            </div>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              open={this.state.open}
              autoHideDuration={3000}
              message={
                <span id="msg-id">Format changed to: {this.state.format.toUpperCase()}</span>
              }
              ContentProps={{ "aria-describedby": "msg-id" }}
              onClose={this.closeSnackbar}
              action={[<span className="material-icons" onClick={this.closeSnackbar}>close</span>]}
            />
          </header>
        );
    }
}

export  default Navbar;