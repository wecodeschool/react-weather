import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      conditions: {
        city: "Lisbon",
        description: "Clouds",
        imgUrl: "http://openweathermap.org/img/w/02d.png",
        precipitation: "62%",
        temperature: 12,
        time: "Thu 15:09",
        wind: "4 km/h"
      }
    };
  }

  render() {
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

        <div className="row">
          <div className="col-md-6">
            <div className="clearfix">
              <img
                className="weather__icon weather__icon--today"
                alt="weather icon"
                src={this.state.conditions.imgUrl}
              />
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
    );
  }
}
