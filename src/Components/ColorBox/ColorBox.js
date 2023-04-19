import React, { Component } from "react";
import "./ColorBox.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

/* ---------- Styles ---------- */
const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showFullPalettte ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: " -5px",
    "&:hover button": {
      opacity: "1",
      transition: "all 0.5s ease-in",
    },
  },
  text: {
    color: (props) =>
      (chroma(props.background).luminance() <= 0.5 ? "#fff" : "#000")
  },
  seeMore: {
    background: "rgb(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.7s",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    zIndex: "0",
    transition: "all 0.3s ease-in-out",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgb(255, 255, 255, 0.3)",
      width: "100%",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      textAlign: "center",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    transitionDelay: " 0.3s",
    zIndex: "20",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  coppyButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "2",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgb(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    opacity: "0",
  },
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
    const { name, background, paletteId, id, showFullPalettte, classes } =
      this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.colorBox} style={{ background: background }}>
          <div
            className={`${classes.copyOverlay} ${
              copied && classes.showOverlay
            }`}
            style={{ background: background }}
          ></div>
          <div
            className={`${classes.copyMessage}  ${
              copied && classes.showMessage
            }`}
          >
            <h1 className={classes.text}>Copied !</h1>
            <p className={classes.text}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.text}>{name}</span>
            </div>

            <button className={`${classes.coppyButton} ${classes.text}`}>
              Copy
            </button>
          </div>
          {showFullPalettte && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={`${classes.seeMore} ${classes.text}`}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
