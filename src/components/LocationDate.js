import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import Geolocation from "./Geolocation";

const LocationDate = () => {
  const APIKEY = "d1fd34b39081d3a2bdcf87fda4ac5271";

  const [form, setForm] = useState({
    city: "",
  });
  const [weather, setWeather] = useState([]);

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({
        data: data,
      });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
  };

  return (
    <div className="location-and-date">
      <div>
        {weather.data !== undefined ? (
          <DisplayWeather data={weather.data} />
        ) : (
          <Geolocation />
        )}
      </div>
      <div>
        <form className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Search"
            name="city"
            id="Search"
            required
            onChange={(e) => handleChange(e)}
          />
          <label for="search" className="form__label">
            Search
          </label>

          <button
            onClick={(e) => weatherData(e)}
            type="submit"
            className="searchBtn"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocationDate;
