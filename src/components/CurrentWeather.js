import React, { Component } from "react";

export class CurrentWeather extends Component {
  render() {
    const temperature = Math.floor(((this.props.current.temp - 32) * 5) / 9);
    const description = this.props.current.weather[0].main;
    const image = {
      url: `http://openweathermap.org/img/wn/${this.props.current.weather[0].icon}@4x.png`,
      alt: `Image of  ${this.props.current.weather[0].description}`,
    };
    const feelsLike = Math.floor(
      ((this.props.current.feels_like - 32) * 5) / 9
    );
    const pressure = this.props.current.pressure;
    const wind = Math.floor(this.props.current.wind_speed);
    const humidity = Math.floor(this.props.current.humidity);
    const sunrise = new Date(
      this.props.current.sunrise * 1000
    ).toLocaleTimeString();
    const sunset = new Date(
      this.props.current.sunset * 1000
    ).toLocaleTimeString();

    return (
      <>
        <div className="current-temperature">
          <div className="current-temperature__icon-container">
            <img
              src={image.url}
              className="current-temperature__icon"
              alt={image.alt}
            />
          </div>
          <div className="current-temperature__content-container">
            <div className="current-temperature__value">{temperature}°</div>
            <div className="current-temperature__summary">{description}</div>
          </div>
        </div>

        {/* Current Status */}
        <div class="current-stats">
          <div>
            <div class="current-stats__value">{feelsLike} &deg;</div>
            <div class="current-stats__label">Feels Like</div>
            <div class="current-stats__value">{pressure} hPa</div>
            <div class="current-stats__label">Pressure</div>
          </div>
          <div>
            <div class="current-stats__value">{wind} Km/hr</div>
            <div class="current-stats__label">Wind</div>
            <div class="current-stats__value">{humidity} %</div>
            <div class="current-stats__label">Humidity</div>
          </div>
          <div>
            <div class="current-stats__value">{sunrise}</div>
            <div class="current-stats__label">Sunrise</div>
            <div class="current-stats__value">{sunset}</div>
            <div class="current-stats__label">Sunset</div>
          </div>
        </div>
      </>
    );
  }
}

export default CurrentWeather;
