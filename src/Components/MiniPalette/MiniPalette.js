import React, {Component} from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../../Styles/MiniPaletteStyles"
import { Delete } from "@material-ui/icons";



class MiniPalette extends Component {
    constructor(props) {
      super(props);
      this.deletePalette = this.deletePalette.bind(this);
    }
  
    deletePalette(e, id) {
      e.stopPropagation();
      this.props.handleDelete(id);
    }
  
    render() {
      const { classes, paletteName, emoji, colors, goToPalete, id} = this.props;
      const miniColorBoxes = colors.map((color) => (
        <div
          className={classes.miniColor}
          style={{ backgroundColor: color.color }}
          key={color.name}
        ></div>
      ));
  
      return (
        <div className={classes.root} onClick={goToPalete}>
            <Delete
            className={classes.deleteIcon}
            style={{ transition: "all 0.3s ease-in-out" }}
            onClick={(e) => this.deletePalette(e, id)}
            />
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>
            {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(MiniPalette);