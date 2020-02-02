import React from "react";
import refreshIcon from "./refresh_icon.svg";
import "./RefreshIcon.css";

const RefreshIcon = () => {
  return (
    <img
      src={refreshIcon}
      className="WeatherApp__refreshIcon"
      alt="RefreshIcon Icon"
    />
  );
};

export default RefreshIcon;
