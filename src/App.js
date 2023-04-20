import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Components/Palette/Palette";
import seedColors from "./Services/seedColors";
import generatePalette from "./Helpers/colorHelpers";
import PaletteList from "./Components/PaletteList/PaletteList";
import SinglePalette from "./Components/SinglePalette/SinglePalette";
import NewPaletteForm from "./Components/NewPaletteForm/NewPaletteForm";

class App extends Component {
  constructor(props) {
    super(props);
    /* ----------States ---------- */
    this.state = { palettes: seedColors };
    /* ---------- Bidning Functions ---------- */
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }
  /* ---------- Functions ---------- */
  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }
  /* ---------- Render ---------- */
  render() {
    return (
      <Switch>
        <Route
          exact
          path={"/palette/new"}
          render={(routesProps) => (
            <NewPaletteForm
              saveNewPalette={this.savePalette}
              {...routesProps}
              palettes={this.state.palettes}
            />
          )}
        />
        <Route
          exact
          path={"/"}
          render={(routesProps) => (
            <PaletteList palette={this.state.palettes} {...routesProps} />
          )}
        />
        <Route
          exact
          path={"/palette/:id"}
          render={(routesProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routesProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path={"/palette/:paletteId/:colorId"}
          render={(routesProps) => (
            <SinglePalette
              palette={generatePalette(
                this.findPalette(routesProps.match.params.paletteId)
              )}
              colorId={routesProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
