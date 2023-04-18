import React from "react";
import { withStyles } from "@material-ui/core";
 /* ---------- Styles ---------- */
const styles = {
    root: {
       backgroundColor: "white",
       borderRadius: "5px",
       padding: "0.5rem",
       border: "none",
       position: "relative",
       overflow: "hidden",
       boxShadow: "3px 7px 16px 3px rgba(0,0,0,0.2)",
       "&:hover": {
        cursor: "pointer",
       }
    },
    colors: {
        backgroundColor: "grey",
        height: "150px",
        width: "100%",
        overflow: "hidden",
        borderRadius: "5px",
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"

    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"

    },
    miniColor: {
        height: "25%",
        width: "25%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-5px"
    }
}




function MiniPalette (props) {
    const {classes, paletteName, emoji, colors} = props;
    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name}></div>
    ));


    return(
        <div className={classes.root}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default  withStyles(styles)(MiniPalette);