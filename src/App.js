import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Components/Palette/Palette";
import seedColors from "./Services/seedColors";
import generatePalette from "./Helpers/colorHelpers";
import PaletteList from "./Components/PaletteList/PaletteList";
import MiniPalette from "./Components/MiniPalette/MiniPalette";

class App extends Component {
  
  findPalette (id) {
    return seedColors.find(function(palette){
      return palette.id === id
    })
  }
  /* ---------- Render ---------- */
  render (){
    return (
        
      <Switch>
        <Route exact path={"/"} render={ (routesProps) => <PaletteList palette={seedColors} {...routesProps}/>}/>
        <Route exact path={"/palette/:id"} render={ (routesProps) =><Palette pallet={generatePalette(this.findPalette(routesProps.match.params.id))}/>}/>
        <Route exact path={"/palette/:paletteId/:colorId"} render={()=> <h1>Single Palette</h1>}/>
      </Switch>
  /* <div className="">
       <Palette pallet={generatePalette(seedColors[4])}/>
      </div> */
    );

  }
}

export default App;
