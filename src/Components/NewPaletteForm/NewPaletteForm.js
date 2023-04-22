import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";
import DraggableColorList from "../DraggableColorList/DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "../PaletteFormNav/PaletteFormNav";
import ColorPcikerForm from "../ColorPickerForm/ColorPickerForm";


/* ----------  Width of SideNav ---------- */
const drawerWidth = 400;
/* ----------  Styles ---------- */
const styles = (theme) => ({
  root: {
    display: "flex",
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
    maxColorBox: 20,
  };

  /* ---------- Constructor ---------- */
  constructor(props) {
    super(props);
    /* ----------  States ---------- */
    this.state = {
      open: true,
      colors: this.props.palettes[0].colors,
    };

    /* ---------- Binding Functions ---------- */
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    //this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.addColor = this.addColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.clrearColors = this.clrearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
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
  // Add new color to state
  addColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: "",
    });
  }
  // Tracking Input
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // Save Palette
  handleSubmit(name) {
    let newName = name;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors,
    };
    console.log(newName);
    this.props.saveNewPalette(newPalette);
    this.props.history.push("/");
  }
  // To drag and drop elements
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };
  // Delete palette
  deleteColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }
  // Clear all palette
  clrearColors() {
    this.setState({ colors: [] });
  }
  // Add random color to palette
  addRandomColor() {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    let newRandomColor = allColors[rand];
    this.setState({ colors: [...this.state.colors, newRandomColor] });
  }

  /* ---------- Render ---------- */
  render() {
    // Destructuring props and states
    const { classes, maxColorBox, palettes } = this.props;
    const { open, colors} =
      this.state;

    // Bolean to give color box limit
    let isFullPalette = colors.length >= maxColorBox;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          handleDrawerOpen={this.handleDrawerOpen}
          handleSubmit={this.handleSubmit}
          palettes={palettes}
        />
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
            <ColorPcikerForm 
              isFullPalette={isFullPalette}
              colors = {this.state.colors}
              addColor={this.addColor}  

            />
          </div>
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
