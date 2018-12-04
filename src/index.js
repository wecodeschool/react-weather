import React from "react";
import ReactDom from "react-dom";
import Weather from "./Weather";

ReactDom.render(<Weather city="Lisbon" />, document.querySelector("#lisbon"));
