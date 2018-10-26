const mathOps = require("../index");

describe("Math Operations' tests: ", () => {
  describe("isNotANumber tests: ", () => {
    test("Expect 3 to be a number", () => {
      expect(mathOps.isNotANumber(3)).toBe(false);
    });
    test("Expect 'a' not to be a number", () => {
      expect(mathOps.isNotANumber("a")).toBe(true);
    });
    test("Expect 6 to be a number", () => {
      expect(mathOps.isNotANumber(6)).toBe(false);
    });
    test("Expect '6' not to be a number", () => {
      expect(mathOps.isNotANumber("6")).toBe(true);
    });
  });

  describe("Factorial tests: ", () => {
    test("Expect the factorial of 1 to be 1", () => {
      expect(mathOps.factorial(1)).toBe(1);
    });
    test("Expect the factorial of 3 to be 6", () => {
      expect(mathOps.factorial(3)).toBe(6);
    });
    test("Expect the factorial of 5 to be 120", () => {
      expect(mathOps.factorial(5)).toBe(120);
    });
  });

  describe("Fibonacci tests: ", () => {
    test("Expect the fibonacci of 0 to be 0", () => {
      expect(mathOps.fibonacci(0)).toBe(0);
    });
    test("Expect the fibonacci of 2 to be 1", () => {
      expect(mathOps.fibonacci(2)).toBe(1);
    });
    test("Expect the fibonacci of 8 to be 21", () => {
      expect(mathOps.fibonacci(8)).toBe(21);
    });
    test("Expect the fibonacci of 12 to be 144", () => {
      expect(mathOps.fibonacci(12)).toBe(144);
    });
  });

  describe("Sum tests: ", () => {
    test("Expect the sum of 1 + 2 to be 3", () => {
      expect(mathOps.sum(1, 2)).toBe(3);
    });
    test("Expect the sum of 1 + 2 + 5 + 8 to be 16", () => {
      expect(mathOps.sum(1, 2, 5, 8)).toBe(16);
    });
  });

  describe("Division tests: ", () => {
    test("Expect the division of 4 / 2 to be 2", () => {
      expect(mathOps.division(4, 2)).toBe(2);
    });

    test("Expect the division of 8 / 2 to be 4", () => {
      expect(mathOps.division(8, 2)).toBe(4);
    });
  });

  describe("isPerfect tests: ", () => {
    test("Expect the number 6 to be perfect", () => {
      expect(mathOps.isPerfect(6)).toBe(true);
    });
    test("Expect the number 8 not to be perfect", () => {
      expect(mathOps.isPerfect(8)).toBe(false);
    });
    test("Expect the number 28 to be perfect", () => {
      expect(mathOps.isPerfect(28)).toBe(true);
    });
    test("Expect the number 496 to be perfect", () => {
      expect(mathOps.isPerfect(496)).toBe(true);
    });
    test("Expect the number 8128 to be perfect", () => {
      expect(mathOps.isPerfect(8128)).toBe(true);
    });
    test("Expect the number 9000 not to be perfect", () => {
      expect(mathOps.isPerfect(9000)).toBe(false);
    });
  });

  describe("isPrime tests: ", () => {
    test("Expect the number 6 not to be prime", () => {
      expect(mathOps.isPrime(6)).toBe(false);
    });
    test("Expect the number 7 to be prime", () => {
      expect(mathOps.isPrime(7)).toBe(true);
    });
    test("Expect the number 17 to be prime", () => {
      expect(mathOps.isPrime(17)).toBe(true);
    });
    test("Expect the number 26 not to be prime", () => {
      expect(mathOps.isPrime(26)).toBe(false);
    });
    test("Expect the number 97 to be prime", () => {
      expect(mathOps.isPrime(97)).toBe(true);
    });
  });

  describe("Bubble Sort tests: ", () => {
    test("Expect that bubleSorting [9, 3, 5, 7, 1] returns [1, 3, 5, 7, 9]", () => {
      expect(mathOps.bubbleSort([9, 3, 5, 7, 1])).toEqual([1, 3, 5, 7, 9]);
    });
    test("Expect that bubleSorting [0, 1, 2] returns [0, 1, 2]", () => {
      expect(mathOps.bubbleSort([0, 1, 2])).toEqual([0, 1, 2]);
    });
    test("Expect that bubleSorting [999, 2, 77, 5] returns [2, 5, 77, 999]", () => {
      expect(mathOps.bubbleSort([999, 2, 77, 5])).toEqual([2, 5, 77, 999]);
    });
  });

  describe("isEven tests: ", () => {
    test("Expect 2 to be even", () => {
      expect(mathOps.isEven(2)).toBe(true);
    });
    test("Expect 3 not to be even", () => {
      expect(mathOps.isEven(3)).toBe(false);
    });
    test("Expect 4248 to be even", () => {
      expect(mathOps.isEven(4248)).toBe(true);
    });
  });

  describe("isOdd tests: ", () => {
    test("Expect 1 to be odd", () => {
      expect(mathOps.isOdd(1)).toBe(true);
    });
    test("Expect 8 not to be odd", () => {
      expect(mathOps.isOdd(8)).toBe(false);
    });
    test("Expect 1331 to be odd", () => {
      expect(mathOps.isOdd(1331)).toBe(true);
    });
  });
});
