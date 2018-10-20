exports.notANumber = value => {
  throw new TypeError(`'${value}' is not a number`);
};
