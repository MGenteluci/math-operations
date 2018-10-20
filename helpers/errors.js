exports.notANumber = number => {
  throw new TypeError(`'${number}' is not a number`);
};
