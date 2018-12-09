import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Navigation";
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}
