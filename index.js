exports.fibonacci = n => n === 0 ? 0 : n <= 2 ? 1 : this.fibonacci(n-1) + this.fibonacci(n-2);

exports.factorial = n => n === 1 ? 1 : n * this.factorial(n-1);

exports.sum = (...args) => args.reduce((i, total) => total += i);

exports.bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
};

exports.isPerfect = n => {
  let sumOfDivisors = 0;
  for (let i = 0; i < n; i++) {
    n % i === 0 ? sumOfDivisors += i : null;
  }
  return sumOfDivisors === n;
};

exports.isPrime = n => {
  let sumOfDivisors = 0;
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? sumOfDivisors++ : null;
  }
  return sumOfDivisors === 2;
};
