import React, {Component} from "react";
//import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";
import { withStyles } from "@material-ui/core";
import "./PaletteList.css"

const styles = {
    root: {
       backgroundColor: "blue",
       height: "100%",
       display: "flex",
       alignItems: "flex-start",
       justifyContent: "center"

    },
    container: {
        widht: "50%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        display: "flex",
        widht: "100%",
        justifyContent: "space-between"

    },
    title:{
        color: "white"
    },
    palette:{
        boxSizing: "border-box",
        widht: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
}


class PaletteList extends Component {

     /* ---------- Render ---------- */
     render () {
        const {palette, classes} = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.title}>Color Lab</h1>
                    </nav>
                    <div className={classes.palette}>

                    {palette.map((p) => (
                        <MiniPalette {... p}/>
                        )
                    )}
                </div>
                </div>
                
            </div>
            
        )
     }
}

export default withStyles(styles)(PaletteList);