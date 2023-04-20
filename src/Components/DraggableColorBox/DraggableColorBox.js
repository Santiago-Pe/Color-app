import React from "react";
import { withStyles } from "@material-ui/core/styles";
import chroma from "chroma-js";
import { Delete } from "@material-ui/icons";

/* ----------  Styles ---------- */
const styles = {
    root: {
        width: "20%",
      height: "25%",
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      marginBottom: " -5px",
      "&:hover svg": {
        color: "white",
        transform: "scale(1.5)"

      }
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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "rgba(0, 0, 0, 0.5)"
      },
      deleteIcon: {
        transition: "all 0.3s ease-in-out"
      }
}
function DraggableColorBox (props){
    const {classes, color, name, deleteColor} = props
    return(
        <div style={{backgroundColor: color}} className={classes.root}>
            <div className={classes.boxContent}>
                <span >{name}</span>
                <Delete className={classes.deleteIcon} onClick={deleteColor}/>
            </div>
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox)