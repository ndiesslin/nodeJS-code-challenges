const nthLargestNumber = function(numbers, value) {
  numbers.sort((a, b) => {
    return b - a;
  })
  return numbers[value - 1];
}

module.exports = { nthLargestNumber };