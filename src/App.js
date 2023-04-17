import React, { Component } from "react";
import Palette from "./Components/Palette";
import seedColors from "./seedColors";
class App extends Component {

  render (){
    return (
      <div className="">
       <Palette {...seedColors[4]}/>
      </div>
    );

  }
}

export default App;
