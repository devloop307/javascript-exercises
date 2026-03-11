const convertToCelsius = function(numFa) {
  let celcius = ((numFa - 32) / 1.8);
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(numCe) {
  let Fahrenheit = (1.8 * numCe) + 32;
  return Math.round(Fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
