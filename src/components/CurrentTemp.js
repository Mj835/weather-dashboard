import React from "react";
import dayIcon from "../icons/clear-day.svg";

const CurrentTemp = () => {
  return (
    <>
      <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img src={dayIcon} className="current-temperature__icon" alt="" />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">25°</div>
          <div className="current-temperature__summary">Mostly Sunny</div>
        </div>
      </div>
    </>
  );
};

export default CurrentTemp;
