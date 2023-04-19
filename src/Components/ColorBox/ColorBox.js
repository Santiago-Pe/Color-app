import React, { Component } from "react";
import "./ColorBox.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";



export default class ColorBox extends Component {
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
    const { name, background, paletteId, id, showLink} = this.props;
    const { copied } = this.state;
    const isLightColor = chroma(background).luminance() <= 0.5
    const isDarkColor = chroma(background).luminance() > 0.5
    console.log(chroma(background).luminance())

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background: background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background: background }}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={isDarkColor && "dark-text"}>Copied !</h1>
            <p className={isDarkColor && "dark-text"}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isLightColor && "light-text"}>{name} -</span>
             
            </div>

            <button className={`copy-button ${isDarkColor && "dark-text"}`}>Copy</button>
          </div>
          {showLink &&  <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >

            <span className={`see-more ${isDarkColor && "dark-text"}`}>More</span>
          </Link>}
         
        </div>
      </CopyToClipboard>
    );
  }
}
