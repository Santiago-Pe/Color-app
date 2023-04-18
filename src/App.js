import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Components/Palette/Palette";
import seedColors from "./Services/seedColors";
import generatePalette from "./Helpers/colorHelpers";
import PaletteList from "./Components/PaletteList/PaletteList";
import SinglePalette from "./Components/SinglePalette/SinglePalette";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  /* ---------- Render ---------- */
  render() {
    return (
      <Switch>
        <Route
          exact
          path={"/"}
          render={(routesProps) => (
            <PaletteList palette={seedColors} {...routesProps} />
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
      /* <div className="">
       <Palette pallet={generatePalette(seedColors[4])}/>
      </div> */
    );
  }
}

export default App;
