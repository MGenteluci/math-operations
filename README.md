# Math Operations

Math Operations is a module with lots of mathematical operations.

## Installation
```javascript
npm install math-operations
```

## Importing

```javascript
const mathOps = require('math-operations');  
```

# Usage

**Factorial**  
Returns the factorial of the number sent as parameter.
```javascript
mathOps.factorial(5);
```

**Fibonacci**  
Returns the fibonacci of the number sent as parameter.
```javascript
mathOps.fibonacci(5);
```

**Sum**  
Return the sum of the numbers sent as parameters.
```javascript
mathOps.sum(1, 8, 5, 2);
```

**Bubble Sort**  
Return the array sent as parameter sorted with bubble sort algorithm.
```javascript
mathOps.bubbleSort([8, 2, 3, 1]);
```

**Perfect Numbers**  
Return true case the number sent as parameter is perfect.
```javascript
mathOps.isPerfect(6);
```

**Prime Numbers**  
Return true case the number sent as parameter is prime.
```javascript
mathOps.isPrime(7);
```

**Even or Odd**  
Two different methods that return a boolean according to the parameter sent.

##### Returns true case the number sent as parameter is an even number
```javascript
mathOps.isEven(4);
```

##### Returns true case the number sent as parameter is an odd number
```javascript
mathOps.isOdd(3);
```
