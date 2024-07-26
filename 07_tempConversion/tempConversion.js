const convertToCelsius = function(fahr) {
  let cels = (fahr - 32) * (5 / 9);
  if (cels % 1 !== 0) { 
    return Number(cels.toFixed(1));
  } else {
    return cels;
  }
};

const convertToFahrenheit = function(cels) {
  let fahr = cels * (9 / 5) + 32;
  if (fahr % 1 !== 0) {
    return Number(fahr.toFixed(1));
  } else {
    return fahr;
  }
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
