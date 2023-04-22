import React, { Component } from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

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

  /* ----------  LyfeCycles ---------- */
  componentDidMount() {
    // custom rule will have name 'isPaletteNameUnique'
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  /* ----------  LyfeCycles ---------- */
  // Tracking Input
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  /* ---------- Render ---------- */
  render() {
    // Destructuring props / states
    const { classes, open, handleDrawerOpen, handleSubmit } = this.props;
    const { newPaletteName } = this.state;
    
    return (
      <>
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
            <div className={classes.navBtns} >
              <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                <TextValidator
                  name="newPaletteName"
                  label="Palette Name"
                  value={newPaletteName}
                  onChange={this.handleChange}
                  validators={["required", "isPaletteNameUnique"]}
                  errorMessages={[
                    "this field is required",
                    "Palette name must be unique",
                  ]}
                />
                <Button variant="contained" color="primary" type="submit">
                  Save Palette
                </Button>
              </ValidatorForm>
              <Link to="/">
                  <Button variant="contained" color="secondary">
                    Go Back
                  </Button>
              </Link>
            </div>
           
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);


