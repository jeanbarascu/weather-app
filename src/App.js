import React from "react";
import Container from "./components/Container";
import RefreshIcon from "./components/RefreshIcon";
import OneDayForecast from "./components/OneDayForecast";
import FiveDaysForecast from "./components/FiveDaysForecast";
import "./App.css";

function App() {
  return (
    <div className="WeatherApp">
      <RefreshIcon />
      <Container>
        <OneDayForecast />
        <FiveDaysForecast />
      </Container>
    </div>
  );
}

export default App;
