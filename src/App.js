import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  city = "Lisbon";

  temperature = function() {
    return 12;
  };

  render() {
    return (
      <div className="weather-summary">
        <div className="weather-summary-header">
          <h1 id="weather-location">{this.city}</h1>
          <div id="weather-date" className="weather-detail__text">
            Thu 15:09
          </div>
          <div className="weather-detail__text" id="weather-description">
            Clouds
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="clearfix">
              <img
                className="weather__icon weather__icon--today"
                alt="weather icon"
                src="http://openweathermap.org/img/w/02d.png"
              />
              <div className="weather-temp weather-temp--today">
                {this.temperature()}
              </div>
              <div className="weather-unit__text weather-unit__text--today">
                °C
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="weather-detail__text">
              Precipitation: <span id="precipitation-probality">62%</span>
            </div>
            <div className="weather-detail__text">
              Wind: <span id="wind-speed">4 km/h</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
