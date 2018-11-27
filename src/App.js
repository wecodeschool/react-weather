import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};

    let apiUrl = "https://api.openweathermap.org";
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiParams = "appid=" + apiKey + "&units=metric";

    axios
      .get(apiUrl + "/data/2.5/weather?" + apiParams + "&q=Miami")
      .then(response => {
        this.setState({
          conditions: {
            city: response.data.name,
            description: response.data.weather[0].main,
            imgUrl:
              "http://openweathermap.org/img/w/" +
              response.data.weather[0].icon +
              ".png",
            precipitation: Math.round(response.data.main.humidity) + "%",
            temperature: Math.round(response.data.main.temp),
            time: this.friendlyDate(new Date()),
            wind: Math.round(response.data.wind.speed) + "km/h"
          }
        });
      });
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

  render() {
    if (this.state.conditions) {
      return (
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
