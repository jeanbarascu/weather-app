class Weather {
  kelvinToCelsius = temp => {
    let tempInCelsius = temp - 273.15;

    return tempInCelsius.toFixed();
  };
}

export default new Weather();
