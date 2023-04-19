import React, {Component} from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";
import { withStyles } from "@material-ui/core";
import styles from "../../Styles/PaletteListStyles"


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
                        <Link to="/paleltte/new">Creat palette</Link>
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