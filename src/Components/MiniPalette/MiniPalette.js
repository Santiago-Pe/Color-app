import React, {PureComponent} from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../../Styles/MiniPaletteStyles"
import { Delete } from "@material-ui/icons";



class MiniPalette extends PureComponent {
    constructor(props) {
      super(props);
      this.deletePalette = this.deletePalette.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    deletePalette(e, id) {
      e.stopPropagation();
      //this.props.handleDelete(id);
      this.props.openDialog(id)
    }
    handleClick () {
      this.props.goToPalete(this.props.id)
    }
  
    render() {
      const { classes, paletteName, emoji, colors, id} = this.props;
      const miniColorBoxes = colors.map((color) => (
        <div
          className={classes.miniColor}
          style={{ backgroundColor: color.color }}
          key={color.name}
        ></div>
      ));
  
      return (
        <div className={classes.root} onClick={this.handleClick}>
          <div className={classes.delete}>
            {/* <Delete
                className={classes.deleteIcon}
                style={{ transition: "all 0.3s ease-in-out" , height: '1.2rem', width: '1.2rem'}}
                onClick={(e) => this.deletePalette(e, id)}
              /> */}
            <button
              className={classes.btnDelete}
              style={{
                transition: "all 0.3s ease-in-out",
                height: "1.2rem",
                width: "1.2rem",
              }}
              onClick={(e) => this.deletePalette(e, id)}
            >
              <Delete  className={classes.icon}/>
            </button>
          </div>

          <div className={classes.colors}>{miniColorBoxes}</div>
          <h5 className={classes.title}>
            {paletteName} <span className={classes.emoji}>{emoji}</span>
          </h5>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(MiniPalette);