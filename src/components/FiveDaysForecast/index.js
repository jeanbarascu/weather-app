import React from "react";
import "./FiveDaysForecast.css";

const FiveDaysForecast = () => {
  return (
    <div className="WeatherApp__fiveDaysForecastContent">
      <ul className="WeatherApp__fiveDaysForecastItems">
        <li className="WeatherApp__fiveDaysForecastItem">
          <p className="WeatherApp__fiveDaysForecastDay">Monday</p>
          <img
            className="WeatherApp__fiveDaysForecastItemIcon"
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt="Wheater Icon"
          />
          <p className="WeatherApp__fiveDaysForecastItemMinTemp">18&#8451;</p>
          <p className="WeatherApp__fiveDaysForecastItemMaxTemp">28&#8451;</p>
        </li>
        <li className="WeatherApp__fiveDaysForecastItem">
          <p className="WeatherApp__fiveDaysForecastDay">Tuesday</p>
          <img
            className="WeatherApp__fiveDaysForecastItemIcon"
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt="Wheater Icon"
          />
          <p className="WeatherApp__fiveDaysForecastItemMinTemp">18&#8451;</p>
          <p className="WeatherApp__fiveDaysForecastItemMaxTemp">28&#8451;</p>
        </li>
        <li className="WeatherApp__fiveDaysForecastItem">
          <p className="WeatherApp__fiveDaysForecastDay">Wednesday</p>
          <img
            className="WeatherApp__fiveDaysForecastItemIcon"
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt="Wheater Icon"
          />
          <p className="WeatherApp__fiveDaysForecastItemMinTemp">18&#8451;</p>
          <p className="WeatherApp__fiveDaysForecastItemMaxTemp">28&#8451;</p>
        </li>
        <li className="WeatherApp__fiveDaysForecastItem">
          <p className="WeatherApp__fiveDaysForecastDay">Thursday</p>
          <img
            className="WeatherApp__fiveDaysForecastItemIcon"
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt="Wheater Icon"
          />
          <p className="WeatherApp__fiveDaysForecastItemMinTemp">18&#8451;</p>
          <p className="WeatherApp__fiveDaysForecastItemMaxTemp">28&#8451;</p>
        </li>
        <li className="WeatherApp__fiveDaysForecastItem">
          <p className="WeatherApp__fiveDaysForecastDay">Friday</p>
          <img
            className="WeatherApp__fiveDaysForecastItemIcon"
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt="Wheater Icon"
          />
          <p className="WeatherApp__fiveDaysForecastItemMinTemp">18&#8451;</p>
          <p className="WeatherApp__fiveDaysForecastItemMaxTemp">28&#8451;</p>
        </li>
      </ul>
    </div>
  );
};

export default FiveDaysForecast;
