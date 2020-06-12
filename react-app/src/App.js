/*global chrome*/

import React, { Component } from "react";
import { Button } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert("Clicked");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.isExt ? (
            <img
              src={chrome.runtime.getURL("static/media/logo.svg")}
              className="App-logo"
              alt="logo"
            />
          ) : (
            <img src={logo} className="App-logo" alt="logo" />
          )}

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={this.handleClick}>Click</Button>
      </div>
    );
  }
}

export default App;
