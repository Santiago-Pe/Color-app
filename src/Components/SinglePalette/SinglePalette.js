import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import color from "@material-ui/core/colors/amber";

/* ---------- Stlyles ---------- */
const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  paletteColor: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: (props) => (props.showFullPalettte ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: " -5px",
    backgroundColor: "black",
    "& a": {
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
      color: "white",
    },
  },
};

class SinglePalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
    /* ---------- State ---------- */
    this.state = {
      format: "hex",
    };
    /* ---------- Binding Functions ---------- */
    this.changeFormat = this.changeFormat.bind(this);
  }

  /* ---------- Functions ---------- */
  gatherShades(palette, colorToFilterBy) {
    // TODO
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  // Change color format
  changeFormat(val) {
    this.setState({ format: val });
  }

  /* ---------- Render ---------- */
  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showFullPalettte={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.paletteColor}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link className="back-button" to={`/palette/${id}`}>
              {" "}
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SinglePalette);
