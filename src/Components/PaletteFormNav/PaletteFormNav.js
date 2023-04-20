import React, {Component} from "react";
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
import { Link } from "react-router-dom";


class PaletteFormNav extends Component {
    constructor(props){
        super(props);
        /* ---------- State ---------- */
        this.state = {
            newPaletteName: ""
        }
        /* ---------- Bidnign Functions ---------- */
        this.handleChange = this.handleChange.bind(this)
    }

    /* ----------  LyfeCycles ---------- */
    componentDidMount() {
        // custom rule will have name 'isPaletteNameUnique'
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
           this.props.palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
           )
        );

    }
    /* ----------  LyfeCycles ---------- */
     // Tracking Input
     handleChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }
    /* ---------- Render ---------- */
    render () {
        const {classes, open, handleDrawerOpen, handleSubmit} = this.props;
        const { newPaletteName } = this.state;
        return(
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
                <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                  <TextValidator 
                    name="newPaletteName"
                    label="Palette Name" 
                    value={newPaletteName}
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
                  <Link to="/">
                    <Button
                      variant="contained"
                      color="secondary"
                    >
                      Go Back
                    </Button>
                  </Link>
                </ValidatorForm>
              </Toolbar>
            </AppBar>
          </>  
        )
    }
}

export default PaletteFormNav;