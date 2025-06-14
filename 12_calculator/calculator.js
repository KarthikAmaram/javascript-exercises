const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, currentNum) => (total + currentNum), 0);
};

const multiply = function(array) {
  return array.reduce((total, currentNum) => (total * currentNum), 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let value = 1;
  for (let i = 1; i <= num; i++) {
      value *= i;    
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
