import React, { Component } from "react";

export class DayForecast extends Component {
  render() {
    const items = this.props.forecast.map((f, i) => {
      const image = {
        url: `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
        alt: `Image of  ${f.weather[0].description}`,
      };

      const d = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      return (
        <div class="next-5-days__row">
          <div class="next-5-days__date">
            {days[d.getDay()]}
            <div class="next-5-days__label">{new Date(f.dt) + ""}</div>
          </div>

          <div class="next-5-days__low">
            {Math.floor(((f.temp.min - 32) * 5) / 9)}&deg;
            <div class="next-5-days__label">Low</div>
          </div>

          <div class="next-5-days__high">
            {Math.floor(((f.temp.max - 32) * 5) / 9)}&deg;
            <div class="next-5-days__label">High</div>
          </div>

          <div class="next-5-days__icon">
            <img src={image.url} alt={image.alt} />
          </div>

          <div class="next-5-days__rain">
            {f.rain} %<div class="next-5-days__label">Rain</div>
          </div>

          <div class="next-5-days__wind">
            {Math.floor(f.wind_speed)} Km/hr
            <div class="next-5-days__label">Wind</div>
          </div>
        </div>
      );
    });

    return (
      <div class="next-5-days">
        <h2 class="next-5-days__heading">Next 7 days</h2>

        <div class="next-5-days__container">{items}</div>
      </div>
    );
  }
}

export default DayForecast;