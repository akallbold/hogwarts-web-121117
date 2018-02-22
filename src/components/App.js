import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import HogListContainer from "./HogListContainer";
import HogOptions from "./HogOptions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogListContainer />
      </div>
    );
  }
}

export default App;
