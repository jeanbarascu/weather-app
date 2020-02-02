import React, { useState, useEffect } from "react";
import axios from "axios";
import sessionUtils from "./../../utils/session.utils";
import weatherApiUtils from "./../../utils/weatherApi.utils";
import {
  API_KEY,
  CURRENT_WEATHER_API_ENDPOINT
} from "./../../constants/api.constants";
import "./OneDayForecast.css";

const OneDayForecast = () => {
  const [weatherDesc, setWeatherDesc] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [currentTemp, setCurrentTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);

  const fetchData = async () => {
    const city = await sessionUtils.ipLookUp();
    let results = {};

    try {
      results = await axios.get(
        `${CURRENT_WEATHER_API_ENDPOINT}${city}&appid=${API_KEY}`
      );
      console.log(results);
    } catch (err) {
      console.log(err);
    }

    setWeatherIcon(results.data.weather[0].icon);
    setWeatherDesc(results.data.weather[0].main);
    setCurrentTemp(results.data.main.temp);
    setMinTemp(results.data.main.temp_min);
    setMaxTemp(results.data.main.temp_max);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <img
        className="WeatherApp__oneDayForecastImg"
        src={`http://openweathermap.org/img/wn/${
          weatherIcon ? weatherIcon : "01d"
        }@2x.png`}
        alt="Wheater Icon"
      />
      <div className="WeatherApp__oneDayForecastContent">
        <h1 className="WeatherApp__oneDayForecastTitle">{weatherDesc}</h1>
        <span className="WeatherApp__oneDayForecastCurrentTemp">
          {weatherApiUtils.fahrenheitToCelsius(currentTemp)} &#8451;
        </span>
        <span className="WeatherApp__oneDayForecastMinMaxTemp">
          min. {weatherApiUtils.fahrenheitToCelsius(minTemp)} &#8451; / max.{" "}
          {weatherApiUtils.fahrenheitToCelsius(maxTemp)} &#8451;
        </span>
      </div>
    </>
  );
};

export default OneDayForecast;
