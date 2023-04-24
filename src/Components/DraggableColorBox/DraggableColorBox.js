/* ---------- Dependeces ---------- */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";
import { SortableElement } from "react-sortable-hoc";

/* ---------- Styles ---------- */
import styles from "../../Styles/DraggableColorBoxStyles";

/* ---------- Component ---------- */

const DraggableColorBox  = SortableElement( (props) => {

    // Destructuring props
    const {classes, color, name, deleteColor} = props;
    
    return(
        <div style={{backgroundColor: color}} className={classes.root}>
            <div className={classes.boxContent}>
                <span >{name}</span>
                <Delete className={classes.deleteIcon} onClick={deleteColor}/>
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox)