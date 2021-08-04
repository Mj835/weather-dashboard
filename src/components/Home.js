import React from "react";
import CurrentStatus from "./CurrentStatus";
import CurrentTemp from "./CurrentTemp";
import Header from "./Header";
import LocationDate from "./LocationDate";
import Next7Days from "./Next7Days";
import WeatherByHour from "./WeatherByHour";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <LocationDate />
        <CurrentTemp />
        <CurrentStatus />
        <WeatherByHour />
        <Next7Days />
      </div>
    </>
  );
};

export default Home;
