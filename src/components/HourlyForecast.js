import React, { Component } from "react";

export class HourlyForecast extends Component {
  render() {
    const items = this.props.forecast.map((f, i) => {
      const image = {
        url: `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
        alt: `Image of  ${f.weather[0].description}`,
      };
      //   const description = f.weather[0].description;
      const unixTimestamp = f.dt;
      let hour = new Date(unixTimestamp * 1000).getHours();
      let ampm = "AM";
      if (hour === 0) hour = 12;
      else if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
      }

      return (
        <div class="weather-by-hour__item">
          <div class="weather-by-hour__hour">
            {hour} {ampm}
          </div>
          <img src={image.url} alt={image.alt} />
          <div>{Math.floor(((f.temp - 32) * 5) / 9)}&deg;</div>
        </div>
      );
    });

    return (
      <div class="weather-by-hour">
        <h2 class="weather-by-hour__heading">Today's weather</h2>
        <div class="weather-by-hour__container">{items}</div>
      </div>
    );
  }
}

export default HourlyForecast;
