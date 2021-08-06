import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import * as Api from "./api/weatherApi";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DayForecast from "./components/DayForecast";

const FARENHEIT = "farehnheit";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Varanasi",
      metric: FARENHEIT,
      hourlyForecast: [],
      dailyForecast: [],
      current: "",
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.updateTemperature = this.updateTemperature.bind(this);

    this.updateTemperature();
  }

  handleLocationChange(location) {
    this.setState({ location });
  }

  async updateTemperature() {
    const weatherRes = await Api.getWeatherBasedOnLocation(this.state.location);
    const forecastRes = await Api.getForecast(
      weatherRes.coord.lat,
      weatherRes.coord.lon
    );

    this.setState({
      current: forecastRes.current,
      metric: FARENHEIT,
      hourlyForecast: forecastRes.hourly,
      dailyForecast: forecastRes.daily,
    });
  }

  render() {
    const location = this.state.location;
    const hourlyForecast = this.state.hourlyForecast;
    const dailyForecast = this.state.dailyForecast;
    const current = this.state.current;

    return (
      <>
        <Header />
        <div className="main-container">
          <SearchBar
            searchValue={location}
            onSearchChange={this.handleLocationChange}
            onFormSubmit={this.updateTemperature}
          />
          {current && <CurrentWeather current={current} />}
          {hourlyForecast.length > 0 && (
            <HourlyForecast forecast={hourlyForecast} />
          )}
          {dailyForecast.length > 1 && <DayForecast forecast={dailyForecast} />}
        </div>
      </>
    );
  }
}

export default App;
