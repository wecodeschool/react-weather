import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.querySelector("#lisbon"));
ReactDom.render(<App city="Sydney" />, document.querySelector("#sydney"));
