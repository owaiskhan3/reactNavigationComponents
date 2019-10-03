import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComp from "./Components/NavbarComp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComp />
      </div>
    );
  }
}

export default App;
