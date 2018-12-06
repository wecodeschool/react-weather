import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import CurrentLocation from "./CurrentLocation";
import Search from "./Search";

export default class Weather extends Component {
  state = {};

  static propTypes = {
    city: PropTypes.string.isRequired
  };

  static defaultProps = {
    city: "lisbon",
    apiUrl: "https://api.openweathermap.org",
    apiKey: "5f472b7acba333cd8a035ea85a0d4d4c"
  };

  constructor(props) {
    super(props);
    this.refreshWeatherFromCity(this.props.city);
  }

  friendlyDate(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    return days[date.getDay()] + " " + date.getHours() + ":" + minutes;
  }

  refreshWeatherFromUrl(url) {
    axios.get(url).then(response => {
      this.setState({
        conditions: {
          city: response.data.name,
          description: response.data.weather[0].main,
          icon: response.data.weather[0].icon,
          precipitation: Math.round(response.data.main.humidity) + "%",
          temperature: Math.round(response.data.main.temp),
          time: this.friendlyDate(new Date()),
          wind: Math.round(response.data.wind.speed) + "km/h"
        }
      });
    });
  }

  refreshWeatherFromLatitudeAndLongitude = (latitude, longitude) => {
    this.refreshWeatherFromUrl(
      this.props.apiUrl +
        "/data/2.5/weather?" +
        "appid=" +
        this.props.apiKey +
        "&units=metric" +
        "&lat=" +
        latitude +
        "&lon=" +
        longitude
    );
  };

  refreshWeatherFromCity = city => {
    this.refreshWeatherFromUrl(
      this.props.apiUrl +
        "/data/2.5/weather?" +
        "appid=" +
        this.props.apiKey +
        "&units=metric" +
        "&q=" +
        city
    );
  };

  render() {
    if (this.state.conditions) {
      return (
        <div>
          <div className="clearfix">
            <Search refresh={this.refreshWeatherFromCity} />
            <CurrentLocation
              refresh={this.refreshWeatherFromLatitudeAndLongitude}
            />
          </div>
          <br />
          <div className="weather-summary">
            <div className="weather-summary-header">
              <h1>{this.state.conditions.city}</h1>
              <div className="weather-detail__text">
                {this.state.conditions.time}
              </div>
              <div className="weather-detail__text">
                {this.state.conditions.description}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="clearfix">
                  <WeatherIcon iconName={this.state.conditions.icon} />
                  <div className="weather-temp weather-temp--today">
                    {this.state.conditions.temperature}
                  </div>
                  <div className="weather-unit__text weather-unit__text--today">
                    °C
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="weather-detail__text">
                  Precipitation: {this.state.conditions.precipitation}
                </div>
                <div className="weather-detail__text">
                  Wind: {this.state.conditions.wind}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          App is loading, <em>please wait...</em>
        </div>
      );
    }
  }
}
