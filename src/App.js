import React, { Component } from "react";
import Palette from "./Components/Palette/Palette";
import seedColors from "./Services/seedColors";
import generatePalette from "./Helpers/colorHelpers";

class App extends Component {

  /* ---------- Render ---------- */
  render (){
    console.log(generatePalette(seedColors[4]))
    return (
      <div className="">
       <Palette {...seedColors[4]}/>
      </div>
    );

  }
}

export default App;
