import React, { Component } from "react";
import PropTypes from "prop-types";

export default class WeatherIcon extends Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired
  };

  render() {
    let imgSrc =
      "http://openweathermap.org/img/w/" + this.props.iconName + ".png";
    return (
      <img
        className="weather__icon weather__icon--today"
        alt="weather icon"
        src={imgSrc}
      />
    );
  }
}
