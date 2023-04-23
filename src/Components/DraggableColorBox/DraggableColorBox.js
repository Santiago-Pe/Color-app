import React from "react";
import { withStyles } from "@material-ui/core/styles";
//import chroma from "chroma-js";
import { Delete } from "@material-ui/icons";
import { SortableElement } from "react-sortable-hoc";
import styles from "../../Styles/DraggableColorBoxStyles";


const DraggableColorBox  = SortableElement( (props) => {
    const {classes, color, name, deleteColor} = props
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