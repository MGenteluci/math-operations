const MathOps = require('./index');
const assert = require('chai').assert;

describe('Math-Operations Tests', () => {

  describe('Factorial tests: ', () => {
    it('Assert that factorial of 1 is equal to 1', done => {
      assert.equal(MathOps.factorial(1), 1);
      done();
    });
    it('Assert that factorial of 3 is equal to 6', done => {
      assert.equal(MathOps.factorial(3), 6);
      done();
    });
    it('Assert that factorial of 5 is equal to 120', done => {
      assert.equal(MathOps.factorial(5), 120);
      done();
    });
  });

  describe('Fibonacci tests: ', () => {
    it('Assert that fibonacci of 0 is equal to 0', done => {
      assert.equal(MathOps.fibonacci(0), 0);
      done();
    });
    it('Assert that fibonacci of 2 is equal to 1', done => {
      assert.equal(MathOps.fibonacci(2), 1);
      done();
    });
    it('Assert that fibonacci of 8 is equal to 21', done => {
      assert.equal(MathOps.fibonacci(8), 21);
      done();
    });
    it('Assert that fibonacci of 12 is equal to 144', done => {
      assert.equal(MathOps.fibonacci(12), 144);
      done();
    });
  });

  describe('Sum tests: ', () => {
    it('Assert that the sum o 1 + 2 is equal to 3', done => {
      assert.equal(MathOps.sum(1, 2), 3);
      done();
    });
    it('Assert that the sum o 1 + 2 + 5 + 8 is equal to 16', done => {
      assert.equal(MathOps.sum(1, 2, 5, 8), 16);
      done();
    });
  });

  describe('isPerfect tests: ', () => {
    it('Assert that the number 6 is perfect', done => {
      assert.equal(MathOps.isPerfect(6), true);
      done();
    });
    it('Assert that the number 8 isn\'t perfect', done => {
      assert.equal(MathOps.isPerfect(8), false);
      done();
    });
    it('Assert that the number 28 is perfect', done => {
      assert.equal(MathOps.isPerfect(28), true);
      done();
    });
    it('Assert that the number 496 is perfect', done => {
      assert.equal(MathOps.isPerfect(496), true);
      done();
    });
    it('Assert that the number 8128 is perfect', done => {
      assert.equal(MathOps.isPerfect(8128), true);
      done();
    });
    it('Assert that the number 9000 isn\'t perfect', done => {
      assert.equal(MathOps.isPerfect(9000), false);
      done();
    });
  });

  describe('isPrime tests: ', () => {
    it('Assert that the number 6 isn\'t prime', done => {
      assert.equal(MathOps.isPrime(6), false);
      done();
    });
    it('Assert that the number 7 is prime', done => {
      assert.equal(MathOps.isPrime(7), true);
      done();
    });
    it('Assert that the number 17 is prime', done => {
      assert.equal(MathOps.isPrime(17), true);
      done();
    });
    it('Assert that the number 26 isn\'t prime', done => {
      assert.equal(MathOps.isPrime(26), false);
      done();
    });
    it('Assert that the number 97 is prime', done => {
      assert.equal(MathOps.isPrime(97), true);
      done();
    });
  });

  describe('Bubble Sort tests: ', () => {
    it('Assert that bubbleSorting [9, 3, 5, 7, 1] returns [1, 3, 5, 7, 9]', done => {
      assert.deepStrictEqual(MathOps.bubbleSort([9, 3, 5, 7, 1]), [1, 3, 5, 7, 9]);
      done();
    });
    it('Assert that bubbleSorting [0, 1, 2] returns [0, 1, 2]', done => {
      assert.deepStrictEqual(MathOps.bubbleSort([0, 1, 2]), [0, 1, 2]);
      done();
    });
    it('Assert that bubbleSorting [999, 2, 77, 5] returns [2, 5, 77, 999]', done => {
      assert.deepStrictEqual(MathOps.bubbleSort([999, 2, 77, 5]), [2, 5, 77, 999]);
      done();
    });
  });

});
