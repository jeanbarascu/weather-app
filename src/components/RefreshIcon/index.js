import React from "react";
import refreshIcon from "./refresh_icon.svg";
import refreshIconRed from "./refresh_icon_red.svg";
import "./RefreshIcon.css";

const RefreshIcon = () => {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="WeatherApp__refreshContainer" onClick={handleClick}>
      <img
        src={window.innerWidth < 1280 ? refreshIcon : refreshIconRed}
        className="WeatherApp__refreshIcon"
        alt="RefreshIcon Icon"
      />
      <p>{window.innerWidth < 1280 ? "" : "refresh"}</p>
    </div>
  );
};

export default RefreshIcon;
