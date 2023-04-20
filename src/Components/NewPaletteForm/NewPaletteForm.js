import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";




/* ----------  Width of SideNav ---------- */
const drawerWidth = 400;
/* ----------  Styles ---------- */
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends React.Component {
    constructor(props) {
        super(props);
        /* ----------  States ---------- */
        this.state = {
            open: true,
            currentColor: "",
            colorButton: "",
            colors: [],
            newName: ""
        };
        /* ---------- Binding Functions ---------- */
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.addColor = this.addColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    /* ----------  LyfeCycles ---------- */
    componentDidMount() {
        // custom rule will have name 'isColorNameUnique'
        ValidatorForm.addValidationRule('isColorNameUnique', value => 
           this.state.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
           )
        );
        // custom rule will have name 'isColorUnique'
        ValidatorForm.addValidationRule('isColorUnique', value => 
           this.state.colors.every(
            ({ color }) => color !== this.state.colorButton
           )
        );
    }
    /* ----------  Functions ---------- */

    // Open nav 
    handleDrawerOpen() {
        this.setState({ open: true });
    }
    // Close nav 
    handleDrawerClose() {
        this.setState({ open: false });
    }
    // Save colors on state to manage ChromePicker component
    handleChangeComplete(colors) {
        // ChromePciker
        this.setState({ currentColor: colors.rgb });
        // Button
        this.setState({ colorButton: colors.hex });
    }
    // Add new color to state
    addColor (e) {
        e.preventDefault();
        const newColor = {
            color: this.state.colorButton,
            name: this.state.newName
        }
        this.setState( { colors: [...this.state.colors, newColor], newName: "" } )
    }
    // Tracking Input
    handleChange(e){
        this.setState({newName: e.target.value})
    }
    // Save Palette
    handleSubmit (){

      let newName = "Palette Test";
      const newPalette = {
        name: newName,
        id: newName.toLowerCase().replace(/ /g, "-"),
        colors: this.state.colors
      }
      this.props.saveNewPalette(newPalette);
      this.props.history.push("/")

    }
    /* ---------- Render ---------- */
    render() {
    // Destructuring props and states  
    const { classes } = this.props;
    const { open, currentColor, colorButton, colors, newName } = this.state;

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
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    open && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Persistent drawer
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Save Palette
                </Button>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <Typography variant="h4">Desing your Palette</Typography>
              <div>
                <Button variant="contained" color="primary">
                  Clear palette
                </Button>
                <Button variant="contained" color="secondary">
                  Random color
                </Button>
              </div>
              <ChromePicker
                color={currentColor}
                // onChange={this.handleChange2}
                onChangeComplete={this.handleChangeComplete}
              />
              <ValidatorForm onSubmit={this.addColor}>
                <TextValidator 
                    value={newName} 
                    onChange={this.handleChange}
                    validators={['required', 'isColorNameUnique','isColorUnique' ]}
                    errorMessages={['this field is required','Color name must be unique', 'Color already used']}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ backgroundColor: colorButton, marginTop: "30px" }}
                    type="submit"
                >
                    Add new color
                </Button>
              </ValidatorForm>
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />

              {colors.map((color) => (
                <DraggableColorBox color={color.color} name={color.name} />
              ))}
            </main>
          </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
