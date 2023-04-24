import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";
import { withStyles } from "@material-ui/core";
import styles from "../../Styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.goToPalete = this.goToPalete.bind(this);
  }
  /* ---------- Functions ---------- */

  // Naveigate to specific palette
  goToPalete(id) {
    this.props.history.push(`/palette/${id}`);
  }
  /* ---------- Render ---------- */
  render() {
    const { palette, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.title}>Color Lab</h1>
            <Link to="/palette/new">Creat palette</Link>
          </nav>
          <TransitionGroup className={classes.palette}>
              {palette.map((p) => (
              
                <CSSTransition  key={p.id} classNames='fade' timeout={300}>
                  <MiniPalette 
                    {...p} 
                    goToPalete={() => this.goToPalete(p.id)} 
                    id={p.id}  
                   
                    linkStyles={classes.link} 
                    handleDelete={deletePalette}

                  />
                </CSSTransition>
              
                
              ))}
            </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
