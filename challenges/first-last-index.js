const firstLastIndex = function(numbers, value) {
  let start = null;
  let stop = null;

  numbers.forEach((number, index) => {
    // If start is null and we are on value, set the first value.
    if (number == value && start == null) {
      start = index;
    }
    // Keep changing stop until the last change is made.
    if (number == value) {
      stop = index;
    }
  });

  return [start, stop];
}

module.exports = { firstLastIndex };