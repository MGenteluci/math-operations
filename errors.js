class MathOperationsError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
};

class NotANumberError extends MathOperationsError {
  constructor(message) {
    super(`${message} is not a number`)
  }
}

module.exports = {
  NotANumberError
};
