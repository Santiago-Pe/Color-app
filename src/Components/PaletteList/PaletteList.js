import React, {Component} from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";
import { withStyles } from "@material-ui/core";
import "./PaletteList.css"

const styles = {
    root: {
       backgroundColor: "blue",
       height: "100vh",
       display: "flex",
       alignItems: "flex-start",
       justifyContent: "center",

    },
    container: {
        width: "50%",
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
    },
    link:{
        textDecoration: "none"
    }

}


class PaletteList extends Component {
    constructor(props){
        super(props);
        this.goToPalete = this.goToPalete.bind(this)
    }
    /* ---------- Functions ---------- */

    // Naveigate to specific palette
    goToPalete (id){
        this.props.history.push(`/palette/${id}`);
    }
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
                        <Link to={`/palette/${p.id}`} className={classes.link} key={p.id}>
                            <MiniPalette 
                            {... p}
                            goToPalete={() => this.goToPalete(p.id)}
                            />
                        </Link>
                        
                        )
                    )}
                </div>
                </div>
                
            </div>
            
        )
     }
}

export default withStyles(styles)(PaletteList);