import React from "react";

const DisplayWeather = (props) => {
  const { data } = props;

  return (
    <div>
      <h1 className="location-and-date__location">
        {data.name}, {data.sys.country}
      </h1>
      {/* <div>Sunday 4th August</div> */}
      <div>{new Date() + ""}</div>
    </div>
  );
};

export default DisplayWeather;
