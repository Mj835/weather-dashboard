import React from "react";
import ModeToggle from "./ModeToggle";

const Header = () => {
  return (
    <>
      <ModeToggle />
      <h1 className="heading">
        <span className="light">Weather</span> Forecast
      </h1>
    </>
  );
};

export default Header;
