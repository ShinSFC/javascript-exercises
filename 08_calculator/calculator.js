const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((result, num) => result * num);
};

const power = function() {
	
};

const factorial = function() {
	
};

// let result =  sum(1, 2)
// console.log(result)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
