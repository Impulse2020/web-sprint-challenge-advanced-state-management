import React, { Component } from "react";
import "./App.css";
import SmurfList from "./smurfList";
import SmurfForm from "./smurfForm";
class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <div>We gotta get these smurfs!</div>
        <div>Have fun!</div>
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
