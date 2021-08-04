import React from "react";

const WeatherByHour = () => {
  return (
    <div class="weather-by-hour">
      <h2 class="weather-by-hour__heading">Today's weather</h2>
      <div class="weather-by-hour__container">
        <div class="weather-by-hour__item">
          <div class="weather-by-hour__hour">3am</div>
          <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
          <div>14&deg;</div>
        </div>
        <div class="weather-by-hour__item">
          <div class="weather-by-hour__hour">6am</div>
          <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
          <div>16&deg;</div>
        </div>
        <div class="weather-by-hour__item">
          <div class="weather-by-hour__hour">9am</div>
          <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
          <div>17&deg;</div>
        </div>
        <div class="weather-by-hour__item">
          <div class="weather-by-hour__hour">12pm</div>
          <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
          <div>19&deg;</div>
        </div>
        <div class="weather-by-hour__item">
          <div class="weather-by-hour__hour">3pm</div>
          <img src="icons/sunny.svg" alt="Sunny" />
          <div>21&deg;</div>
        </div>
        <div class="weather-by-hour__item">
          <div class="weather-by-hour__hour">6pm</div>
          <img src="icons/sunny.svg" alt="Sunny" />
          <div>20&deg;</div>
        </div>
        <div class="weather-by-hour__item">
          <div class="weather-by-hour__hour">9pm</div>
          <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
          <div>18&deg;</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherByHour;
