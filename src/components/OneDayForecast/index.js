import React from "react";
import "./OneDayForecast.css";

const OneDayForecast = () => {
  return (
    <>
      <img
        className="WeatherApp__oneDayForecastImg"
        src="http://openweathermap.org/img/wn/11d@2x.png"
        alt="Wheater Icon"
      />
      <div className="WeatherApp__oneDayForecastContent">
        <h1 className="WeatherApp__oneDayForecastTitle">Thunderstorm</h1>
        <span className="WeatherApp__oneDayForecastCurrentTemp">
          16 &#8451;
        </span>
        <span className="WeatherApp__oneDayForecastMinMaxTemp">
          min. 8 &#8451; / max. 22 &#8451;
        </span>
      </div>
    </>
  );
};

export default OneDayForecast;
