/* ---------- Dependeces ---------- */
import React, { Component } from "react";
import Slider from "rc-slider";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/styles";

/* ---------- Styels ---------- */
import "rc-slider/assets/index.css";
import styles from "../../Styles/NavbarStyles"

/* ---------- Componente ---------- */

class Navbar extends Component {
  constructor(props) {
    super(props);

    /* ---------- States ---------- */
    
    // State for saving color formats and managing notifications.
    this.state = { format: "hex", open: false };

    /* ---------- Binding Functions ---------- */
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  /* ---------- Fucntions ---------- */
  // Close alert
  closeSnackbar() {
    this.setState({ open: false });
  }

  /* ---------- Fucntions as props ---------- */
  
  // Handle inputs value
  handleFormatChange(evt) {
    this.setState({ format: evt.target.value, open: true });
    this.props.handleChange(evt.target.value);
  }

  /* ---------- render ---------- */
  render() {
    // Destructuring props and states
    const { level, changeLevel, showingAllColors, classes} = this.props;
    const { format } = this.state;

    return (
      <header className={classes.navbar}>
        <Link className={classes.logo} to={"/"}>
          <span className={classes.logoTitle}>ColorLab</span>
          <span className="material-icons">palette</span>
        </Link>
        {showingAllColors && (
          <div className="slider-contianer">
            <span className={classes.label}>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                onAfterChange={changeLevel}
                step={100}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value="hex">HEX - #FFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="msg-id">
              Format changed to: {this.state.format.toUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describedby": "msg-id" }}
          onClose={this.closeSnackbar}
          action={[
            <span className="material-icons" onClick={this.closeSnackbar}>
              close
            </span>,
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
