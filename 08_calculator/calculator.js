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

const power = function(num1, num2) {
  let result = 1;
  for (let i = num2; i > 0; i--) {
    result *= num1;
  }
  return result;
};

const factorial = function(num) {
  if (num == 0) return 1;
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
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
