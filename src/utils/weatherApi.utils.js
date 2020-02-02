class Weather {
  fahrenheitToCelsius = temp => {
    let tempInCelsius = ((temp - 32) * 5) / 9;

    return tempInCelsius.toFixed();
  };
}

export default new Weather();
