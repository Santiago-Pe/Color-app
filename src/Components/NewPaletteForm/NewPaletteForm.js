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
import DraggableColorList from "../DraggableColorList/DraggableColorList";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { arrayMove } from "react-sortable-hoc";




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

    /* ----------  Statics Props ---------- */
    static defaultProps = {
      maxColorBox: 20
    }
    constructor(props) {
        super(props);
        /* ----------  States ---------- */
        this.state = {
            open: true,
            currentColor: "",
            colorButton: "",
            colors: this.props.palettes[0].colors,
            newColorName: "",
            newPaletteName: ""
        };
        /* ---------- Binding Functions ---------- */
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.addColor = this.addColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteColor = this.deleteColor.bind(this);
        this.clrearColors = this.clrearColors.bind(this);
        this.addRandomColor = this.addRandomColor.bind(this);

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
        // custom rule will have name 'isPaletteNameUnique'
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
           this.props.palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
           )
        );
    }
    /* ----------  Functions ---------- */

    // Open nav 
    handleDrawerOpen () {
        this.setState({ open: true });
    }
    // Close nav 
    handleDrawerClose () {
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
            name: this.state.newColorName
        }
        this.setState( { colors: [...this.state.colors, newColor], newColorName: "" } )
    }
    // Tracking Input
    handleChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }
    // Save Palette
    handleSubmit () {

      let newName = this.state.newPaletteName;
      const newPalette = {
        paletteName: newName,
        id: newName.toLowerCase().replace(/ /g, "-"),
        colors: this.state.colors
      }
      console.log(newName)
      this.props.saveNewPalette(newPalette);
      this.props.history.push("/")

    }
    // To drag and drop elements
    onSortEnd = ({oldIndex, newIndex}) => {
      this.setState(({colors}) => ({
        colors: arrayMove(colors, oldIndex, newIndex),
      }));
    };
    // Delete palette
    deleteColor (colorName) {
      this.setState({
        colors: this.state.colors.filter(color => color.name !== colorName)
      })

    }
    // Clear all palette
    clrearColors () {
      this.setState({colors: []})
    }
    // Add random color to palette
    addRandomColor () {
      const allColors = this.props.palettes.map( p => p.colors).flat();
      let rand = Math.floor(Math.random() * allColors.length);
      let newRandomColor = allColors[rand]
      this.setState({colors: [... this.state.colors, newRandomColor]})
    }
    /* ---------- Render ---------- */
    render() {
    // Destructuring props and states  
    const { classes, maxColorBox } = this.props;
    const { open, currentColor, colorButton, colors, newColorName } = this.state;
    let isFullPalette = colors.length >= maxColorBox; 

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
                  Create your own palette
                </Typography>
                <ValidatorForm onSubmit={this.handleSubmit}>
                  <TextValidator 
                    name="newPaletteName"
                    label="Palette Name" 
                    value={this.state.newPaletteName}
                    onChange={this.handleChange} 
                    validators={['required', 'isPaletteNameUnique']}
                    errorMessages={['this field is required', 'Palette name must be unique']}
                    />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Save Palette
                  </Button>
                </ValidatorForm>
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
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={this.clrearColors}
                >
                  Clear palette
                </Button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={this.addRandomColor}
                  disabled={isFullPalette}
                >
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
                    value={newColorName} 
                    name="newColorName"
                    onChange={this.handleChange}
                    validators={['required', 'isColorNameUnique','isColorUnique' ]}
                    errorMessages={['this field is required','Color name must be unique', 'Color already used']}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ backgroundColor: colorButton, marginTop: "30px" }}
                    type="submit"
                    disabled={isFullPalette}
                >
                    { isFullPalette ? "Full palette" : "Add new color"}
                </Button>
              </ValidatorForm>
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
              <DraggableColorList 
                colors={colors} 
                deleteColor={this.deleteColor}
                onSortEnd={this.onSortEnd}
                axis="xy"
              />
            </main>
          </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
