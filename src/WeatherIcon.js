import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import PropTypes from "prop-types";

export default class WeatherIcon extends Component {
  static propTypes = { iconName: PropTypes.string.isRequired };

  iconMatching = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG"
  };

  render() {
    return (
      <ReactAnimatedWeather
        icon={this.iconMatching[this.props.iconName]}
        color="#000"
        size={38}
        animate={true}
      />
    );
  }
}
