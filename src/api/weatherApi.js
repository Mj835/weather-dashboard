import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const APIKEY = "d1fd34b39081d3a2bdcf87fda4ac5271";

const getWeatherBasedOnLocation = (location) => {
  return apiClient
    .get(`/weather?q=${location}&APPID=${APIKEY}&units=imperial`)
    .then((res) => res.data);
};

const getForecast = (lat, lon) => {
  return apiClient
    .get(`/onecall?lat=${lat}&lon=${lon}&APPID=${APIKEY}&units=imperial`)
    .then((res) => res.data);
};

export { getWeatherBasedOnLocation, getForecast };
