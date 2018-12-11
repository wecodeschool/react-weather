import React, { Component } from "react";
import axios from "axios";
import Api from "./Api";
import DateUtil from "./DateUtil";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default class Forecast extends Component {
  state = {
    city: this.props.city
  };
  componentWillMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ city: nextProps.city }, () => {
      this.refresh();
    });
  }

  refresh = () => {
    let url = `${Api.url}/data/2.5/forecast?appid=${Api.key}&units=metric&q=${
      this.state.city
    }`;

    axios.get(url).then(response => {
      let forecast = response.data.list;
      // The API returns the forecast every 3 hour, so we are exrtacting
      // the weather for every 24 hours which 8 times 3 hour cycles
      let dailyForecast = [7, 15, 23, 31, 39].map(index => {
        return {
          description: forecast[index].weather[0].main,
          icon: forecast[index].weather[0].icon,
          precipitation: Math.round(forecast[index].main.humidity) + "%",
          temperature: Math.round(forecast[index].main.temp),
          day: new DateUtil(new Date(forecast[index].dt * 1000)).day(true),
          wind: Math.round(forecast[index].wind.speed) + "km/h"
        };
      });
      this.setState({ forecast: dailyForecast });
    });
  };
  render() {
    if (this.state.forecast) {
      return (
        <div className="row">
          {this.state.forecast.map((weather, index) => {
            return (
              <div className="col-sm-2" key={index}>
                <div className="forecast-day">{weather.day}</div>
                <div className="forecast-icon">
                  <WeatherIcon iconName={weather.icon} />
                </div>
                <div className="forecast-temperature">
                  {weather.temperature}°
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
