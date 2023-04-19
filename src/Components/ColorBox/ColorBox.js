import React, { Component } from "react";
import "./ColorBox.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

/* ---------- Styles ---------- */
const styles = {
  text:{
    color: props => 
    (chroma(props.background).luminance() <= 0.5 ? "#fff" : "#000")
  }
};

 class ColorBox extends Component {
  constructor(props) {
    super(props);
    /* ---------- States ---------- */
    // State to show a message when the user wants get color
    this.state = { copied: false };

    /* ---------- Binding Functions ---------- */
    this.changeCopyState = this.changeCopyState.bind(this);
}

  /* ---------- Functions ---------- */

  // Manipulation of state to trigger screen
  changeCopyState() {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1500);
  }

  /* ---------- Render ---------- */
  render() {
    // Destructuring props and states
    const { name, background, paletteId, id, showLink, classes} = this.props;
    const { copied } = this.state;
    // const isLightColor = chroma(background).luminance() <= 0.5
    // const isDarkColor = chroma(background).luminance() > 0.5

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background: background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background: background }}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={classes.text}>Copied !</h1>
            <p className={classes.text}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.text}>{name} - {chroma(background).luminance()}</span>
             
            </div>

            <button className={`copy-button ${classes.text}`}>Copy</button>
          </div>
          {showLink &&  <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >

            <span className={`see-more ${classes.text}`}>More</span>
          </Link>}
         
        </div>
      </CopyToClipboard>
    );
  }
}

export default  withStyles(styles)(ColorBox);