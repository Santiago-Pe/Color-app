/* ---------- Dependeces ---------- */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/* ---------- Helpers ---------- */
import generatePalette from "./Helpers/colorHelpers";

/* ---------- Child Component ---------- */
import Palette from "./Components/Palette/Palette";
import seedColors from "./Services/seedColors";
import PaletteList from "./Components/PaletteList/PaletteList";
import SinglePalette from "./Components/SinglePalette/SinglePalette";
import NewPaletteForm from "./Components/NewPaletteForm/NewPaletteForm";
import Page from "./Components/Page/Page";

/* ---------- CSS ---------- */
import "./App.css";




/* ---------- Componente ---------- */

class App extends Component {
  constructor(props) {
    super(props);

    /* ----------Local Storage ---------- */
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    /* ----------States ---------- */
    this.state = { palettes: savedPalettes || seedColors };
    /* ---------- Bidning Functions ---------- */
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  /* ---------- Functions ---------- */

  // go to the correct palette
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }
  //save palettes to state
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  // save pallet to local storage
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  // delete palette
  deletePalette(id) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  }
  /* ---------- Render ---------- */
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={300} key={location.key}>
              <Switch location={location}>
                <Route
                  exact
                  path={"/palette/new"}
                  render={(routesProps) => (
                    <div className="page">
                      <NewPaletteForm
                        saveNewPalette={this.savePalette}
                        {...routesProps}
                        palettes={this.state.palettes}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path={"/"}
                  render={(routesProps) => (
                    <Page className="page">
                      <PaletteList
                        palette={this.state.palettes}
                        {...routesProps}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path={"/palette/:id"}
                  render={(routesProps) => (
                    <Page className="page">
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routesProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path={"/palette/:paletteId/:colorId"}
                  render={(routesProps) => (
                    <Page className="page">
                      <SinglePalette
                        palette={generatePalette(
                          this.findPalette(routesProps.match.params.paletteId)
                        )}
                        colorId={routesProps.match.params.colorId}
                      />
                    </Page>
                  )}
                />
                 <Route
                   render={(routesProps) => (
                    <Page className="page">
                      <PaletteList
                        palette={this.state.palettes}
                        {...routesProps}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
