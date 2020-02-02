import React from "react";
import refreshIcon from "./refresh_icon.svg";
import "./refreshIcon.css";

const Reload = () => {
  return (
    <img src={refreshIcon} className="WeatherApp__reload" alt="Reload Icon" />
  );
};

export default Reload;
