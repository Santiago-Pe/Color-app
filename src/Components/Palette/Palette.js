/* ---------- Dependeces ---------- */
import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";
import { withStyles } from "@material-ui/styles";
import Page from '../Page/Page'
/* ---------- Styles ---------- */
import styles from "../../Styles/PaletteStyles";

/* ---------- Component ---------- */

class Palette extends Component {
  constructor(props) {
    super(props);

    /* ---------- States ---------- */

    // State to tracking de scale of my color
    this.state = {
      level: 500,
      format: "rgb",
    };

    /* ---------- Binding Functions ---------- */
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  /* ---------- Functions ---------- */

  // Changes levels of color scale
  changeLevel(level) {
    this.setState({ level });
  }
  // Change color format
  changeFormat(val) {
    this.setState({ format: val });
  }

  /* ---------- Render ---------- */
  render() {
    // Destructuring props and states
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;

    // Creat new array of colors and pass down props
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showFullPalettte={true}
      />
    ));

    return (
      <Page>
        <div className={classes.palette}>
                <Navbar
                  level={level}
                  changeLevel={this.changeLevel}
                  handleChange={this.changeFormat}
                  showingAllColors={true}
                />
                <div className={classes.paletteColor}>{colorBoxes}</div>
                
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
      </Page>
      
    );
  }
}

export default withStyles(styles)(Palette);
