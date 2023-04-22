import React, { Component } from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
//import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PopupForm from "../PopupForm/PopupForm";

/* ----------  Width of SideNav ---------- */
const drawerWidth = 400;
/* ----------  Styles ---------- */
const styles =  (theme) => ({
  root:{
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  navBtns:{
    display: "flex",
    flexDirection: "row"
  }
})

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    /* ---------- State ---------- */
    this.state = {
      newPaletteName: "",
    };
    /* ---------- Bidnign Functions ---------- */
    this.handleChange = this.handleChange.bind(this);
  }

  /* ----------  Functions ---------- */
  // Tracking Input
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  /* ---------- Render ---------- */
  render() {
    // Destructuring props / states
    const { classes, open, handleDrawerOpen, handleSubmit, palettes } = this.props;
    //const { newPaletteName } = this.state;
    
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
            <Typography variant="h6" color="inherit" noWrap>
              Create your own palette
            </Typography>           
          </Toolbar>
          <div className={classes.navBtns} >
              
              <Link to="/">
                  <Button variant="contained" color="secondary">
                    Go Back
                  </Button>
              </Link>
        </div>
        <PopupForm  handleSubmit={handleSubmit} palettes={palettes }/>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);


