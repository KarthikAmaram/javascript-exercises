const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * (5/9);
  let roundedTemp = Math.round(celsiusTemp * 10)/10;
  return roundedTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = (celsiusTemp * (9/5) + 32);
  let roundedTemp = Math.round(fahrenheitTemp * 10)/10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
