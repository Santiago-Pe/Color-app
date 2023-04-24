/* ---------- Dependeces ---------- */
import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";

/* ---------- Styles ---------- */
import styles from "../../Styles/ColorPickerFormStyles";

/* ---------- Component ---------- */

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);

    /* ---------- States ---------- */
    this.state = {
      currentColor: "",
      colorButton: "",
      newColorName: "",
    };

    /* ---------- Binding Functions ---------- */
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* ----------  LyfeCycles ---------- */
  componentDidMount() {
    // custom rule will have name 'isColorNameUnique'
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    // custom rule will have name 'isColorUnique'
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.colorButton)
    );
  }

  /* ---------- Functions ---------- */

  // Save colors on state to manage ChromePicker component
  handleChangeComplete(colors) {
    // ChromePciker
    this.setState({ currentColor: colors.rgb });
    // Button
    this.setState({ colorButton: colors.hex });
  }
  // Tracking Input
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // Add color and clean input
  handleSubmit() {
    const newColor = {
      color: this.state.colorButton,
      name: this.state.newColorName,
    };
    this.setState({ newColorName: "" });
    this.props.addColor(newColor);
  }
  /* ---------- Render ---------- */
  render() {
    // Destructuring props / states
    const { isFullPalette, classes } = this.props;
    const { currentColor, colorButton, newColorName } = this.state;

    return (
      <div className={classes.root}>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.handleChangeComplete}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            variant="filled"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "this field is required",
              "Color name must be unique",
              "Color already used",
            ]}
            placeholder="Color Name"
            className={classes.inputColor}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{ backgroundColor: colorButton, marginTop: "30px" }}
            type="submit"
            disabled={isFullPalette}
            className={classes.addColor}
          >
            {isFullPalette ? "Full palette" : "Add new color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
