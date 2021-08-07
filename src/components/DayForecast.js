import React, { Component } from "react";
import moment from "moment";

export class DayForecast extends Component {
  render() {
    const items = this.props.forecast.map((f, i) => {
      if (i === 0) {
        return null;
      }

      const image = {
        url: `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
        alt: `Image of  ${f.weather[0].description}`,
      };

      return (
        <div class="next-7-days__row">
          <div class="next-7-days__date">
            {/* {days[d.getDay()]} {new Date(f.dt) + ""} */}
            {moment.unix(f.dt).format("dddd").slice(0, 3)}
            <div class="next-7-days__label"></div>
          </div>

          <div class="next-7-days__low">
            {Math.floor(((f.temp.min - 32) * 5) / 9)}&deg;
            <div class="next-7-days__label">Low</div>
          </div>

          <div class="next-7-days__high">
            {Math.floor(((f.temp.max - 32) * 5) / 9)}&deg;
            <div class="next-7-days__label">High</div>
          </div>

          <div class="next-7-days__icon">
            <img src={image.url} alt={image.alt} />
          </div>

          <div class="next-7-days__rain">
            {f.rain} %<div class="next-7-days__label">Rain</div>
          </div>

          <div class="next-7-days__wind">
            {Math.floor(f.wind_speed)} Km/hr
            <div class="next-7-days__label">Wind</div>
          </div>
        </div>
      );
    });

    return (
      <div class="next-7-days">
        <h2 class="next-7-days__heading">Next 7 days</h2>

        <div class="next-7-days__container">{items}</div>
      </div>
    );
  }
}

export default DayForecast;
