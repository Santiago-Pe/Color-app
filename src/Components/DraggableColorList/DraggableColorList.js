/* ---------- Dependeces ---------- */
import React from "react";
import { SortableContainer } from "react-sortable-hoc";

/* ---------- Childe Component ---------- */
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";


 const DraggableColorList  = SortableContainer((props) => {

    // Destructuring props
    const {colors, deleteColor} = props;

    return(
        <div style={{height: "100%"}}>
            {colors.map((color, i) => (
                <DraggableColorBox 
                index={i}
                key={color.name}
                color={color.color} 
                name={color.name} 
                deleteColor={() => deleteColor(color.name)}      
                />
            ))}
        </div>
    )
})

export default DraggableColorList