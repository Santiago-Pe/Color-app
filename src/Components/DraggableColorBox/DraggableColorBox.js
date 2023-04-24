/* ---------- Dependeces ---------- */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";
import { SortableElement } from "react-sortable-hoc";
import chroma from "chroma-js";

/* ---------- Styles ---------- */
import styles from "../../Styles/DraggableColorBoxStyles";

/* ---------- Component ---------- */

const DraggableColorBox = SortableElement((props) => {
  // Destructuring props
  const { classes, color, name, deleteColor } = props;
  chroma(color).luminance();

  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      <div className={classes.boxContent}>
        <p
          className={`${
            chroma(color).luminance() >= 0.5
              ? classes.textDark
              : classes.textLight
          }`}
        >
          {name}
        </p>
        <Delete
          className={`${
            chroma(color).luminance() >= 0.5
              ? classes.textDark
              : classes.textLight
          } ${classes.deleteIcon}`}
          onClick={deleteColor}
        />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
