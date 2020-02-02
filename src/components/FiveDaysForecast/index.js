import React, { useState, useEffect } from "react";
import axios from "axios";
import sessionUtils from "./../../utils/session.utils";
import weatherApiUtils from "./../../utils/weatherApi.utils";
import moment from "moment";
import {
  API_KEY,
  FIVE_DAYS_WEATHER_API_ENDPOINT
} from "./../../constants/api.constants";
import "./FiveDaysForecast.css";

const FiveDaysForecast = () => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchData = async () => {
    const city = await sessionUtils.ipLookUp();
    let results = {};

    try {
      results = await axios.get(
        `${FIVE_DAYS_WEATHER_API_ENDPOINT}${city}&appid=${API_KEY}`
      );
    } catch (err) {
      console.log(err);
    }

    setWeatherData(results.data.list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="WeatherApp__fiveDaysForecastContent">
      <ul className="WeatherApp__fiveDaysForecastItems">
        {weatherData &&
          weatherData.slice(0, 5).map(item => {
            return (
              <li key={item.dt} className="WeatherApp__fiveDaysForecastItem">
                <p className="WeatherApp__fiveDaysForecastDay">{item.dt_txt}</p>
                <img
                  className="WeatherApp__fiveDaysForecastItemIcon"
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="Wheater Icon"
                />
                <p className="WeatherApp__fiveDaysForecastItemMinTemp">
                  {weatherApiUtils.kelvinToCelsius(item.main.temp_min)}
                  &#8451;
                </p>
                <p className="WeatherApp__fiveDaysForecastItemMaxTemp">
                  {weatherApiUtils.kelvinToCelsius(item.main.temp_max)}
                  &#8451;
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FiveDaysForecast;
