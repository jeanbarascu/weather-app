import React from "react";
import "./Container.css";

const Container = ({ children }) => {
  return <section className="WeatherApp__container">{children}</section>;
};

export default Container;
