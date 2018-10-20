const error = require('./helpers/errors');

exports.isNotANumber = value => typeof value !== 'number';

exports.fibonacci = number => {
  if (this.isNotANumber(number)) {
    error.notANumber(number);
  }

  return number === 0 
  ? 0 
  : number <= 2 
  ? 1 
  : this.fibonacci(number - 1) + this.fibonacci(number - 2);
};

exports.factorial = number => {
  if (this.isNotANumber(number)) {
    error.notANumber(number);
  }

  return number === 1 
  ? 1 
  : number * this.factorial(number - 1);
};

exports.sum = (...args) => args.reduce((i, total) => (total += i));

exports.bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

exports.isPerfect = n => {
  if (this.isNotANumber(n)) {
    error.notANumber(number);
  }
  
  let sumOfDivisors = 0;
  for (let i = 0; i < n; i++) {
    n % i === 0 ? (sumOfDivisors += i) : null;
  }
  return sumOfDivisors === n;
};

exports.isPrime = number => {
  if (this.isNotANumber(number)) {
    error.notANumber(number);
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

exports.isEven = number => {
  if (this.isNotANumber(number)) {
    error.notANumber(number);
  }
  
  return number % 2 === 0;
};

exports.isOdd = number => !this.isEven(number);
