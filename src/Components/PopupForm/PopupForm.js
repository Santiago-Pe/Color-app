import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

export default class PopupForm extends React.Component {

  /* ---------- Constructor ---------- */  
  constructor(props) {

    super(props);

    /* ---------- State ---------- */
    this.state = { 
        open: false ,  
        newPaletteName: "",
    };

    /* ---------- Binding Functions ---------- */
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  /* ----------  Functions ---------- */

  handleClickOpen  () {
    this.setState({ open: true });
  };

  handleClose ()  {
    this.setState({ open: false });
  };
  handleSubmit ()  {
    this.setState({ open: false });
  };
  // Tracking Input
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /* ---------- Render ---------- */
  render() {

    // Destructuring props / states
    const { handleSubmit } = this.props;
    const { newPaletteName } = this.state;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Save Palette
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
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

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


/**
 *<ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
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
 */