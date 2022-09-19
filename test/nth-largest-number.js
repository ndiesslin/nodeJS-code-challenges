var assert = require('assert');
const { nthLargestNumber } = require('../challenges/nth-largest-number.js')

describe('Check for the nth largest number.', function () {
  describe('#nthLargestNumber()', function () {
    it('should return 6 for the 4th largest.', function () {
      const numbersArray = [2,4,6,7,30,6,10];

      assert.strictEqual(nthLargestNumber(numbersArray, 4), 6);
    });
  });
});