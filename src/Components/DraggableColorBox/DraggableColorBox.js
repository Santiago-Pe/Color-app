import React from "react";
import { withStyles } from "@material-ui/core/styles";

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
    }
}
function DraggableColorBox (props){
    const {classes, color} = props
    return(
        <div style={{backgroundColor: color}} className={classes.root}>{color}</div>
    )
}

export default withStyles(styles)(DraggableColorBox)