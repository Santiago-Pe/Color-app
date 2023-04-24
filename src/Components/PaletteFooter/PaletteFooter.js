/* ---------- Dependeces ---------- */
import React from "react";
import { withStyles } from "@material-ui/core";

/* ---------- Styles ---------- */
import styles from "../../Styles/PaletteFooterStyles";

/* ---------- Component ---------- */

function PaletteFooter (props){

    // Destructuring props
    const {paletteName, emoji, classes} = props;
    
    return(
        <footer className={classes.paletteFooter}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </footer>
    )
}

export default withStyles(styles)(PaletteFooter)