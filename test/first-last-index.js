var assert = require('assert');
const { firstLastIndex } = require('../challenges/first-last-index.js')

describe('Check for the first and last index positions of number in array.', function () {
  describe('#firstLastIndex()', function () {
    it('should return correct array.', function () {
      const numbers = [1,3,3,3,3,4,4,5,6,7,8,8];
      const expectValue = [1,4]

      assert.deepEqual(firstLastIndex(numbers, 3), expectValue);
    });

    it('should return 1 for first position.', function () {
      const numbers = [1,3,3,3,3,4,4,5,6,7,8,8];
      const expectValue = 1;

      assert.strictEqual(firstLastIndex(numbers, 3)[0], expectValue);
    });

    it('should return 4 for last position.', function () {
      const numbers = [1,3,3,3,3,4,4,5,6,7,8,8];
      const expectValue = 4;

      assert.strictEqual(firstLastIndex(numbers, 3)[1], expectValue);
    });
  });
});