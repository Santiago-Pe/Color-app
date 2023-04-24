/* ---------- Dependeces ---------- */
import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

/* ---------- Styles ---------- */
import styles from "../../Styles/ColorBoxStyles";
import classesNames from "classnames";

/* ---------- Component ---------- */

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
            className={classesNames(classes.copyOverlay, {
              [classes.showOverlay]: copied,
            })}
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
