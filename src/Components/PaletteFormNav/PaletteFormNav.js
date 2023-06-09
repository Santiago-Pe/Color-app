/* ---------- Dependeces ---------- */
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";



/* ---------- Child Component ---------- */
import PopupForm from "../PopupForm/PopupForm";

/* ---------- Styles ---------- */
import styles from "../../Styles/PaletteFormNavStyles";



/* ---------- Dependeces ---------- */

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);

    /* ---------- State ---------- */
    this.state = {
      newPaletteName: "",
      formShoing: false
    };

    /* ---------- Bidnign Functions ---------- */
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  /* ----------  Functions ---------- */
  // Tracking Input
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  showForm () {
    this.setState({formShoing: true})
  }
  closeForm () {
    this.setState({formShoing: false})
  }

  /* ---------- Render ---------- */
  render() {

    // Destructuring props / states
    const { classes, open, handleDrawerOpen, handleSubmit, palettes } = this.props;
    const { formShoing } = this.state;
    
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap  className={classes.title}>
              Create your own palette
            </Typography>           
          </Toolbar>
          <div className={classes.navBtns} >
              <Link to="/">
                  <Button variant="contained" color="secondary" className={classes.button}>
                    Go Back
                  </Button>
              </Link>
              <Button
                variant="contained"
                color="primary"
                onClick={this.showForm}
                className={classes.button}
              >
                Save
              </Button>
              
          </div>
        
        </AppBar>

     { formShoing && <PopupForm  handleSubmit={handleSubmit} palettes={palettes } closeForm={this.closeForm}/> }
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);


