var assert = require('assert');
const { anagramCheck } = require('../challenges/anagram-check.js')

describe('Check anagram.', function () {
  describe('#anagramCheck()', function () {
    it('should return true for anagram.', function () {
      const string1 = 'Username';
      const string2 = 'nameUser';

      assert(anagramCheck(string1, string2));
    });

    it('should return false for non-anagram.', function () {
      const string1 = 'Username';
      const string2 = 'nameUsers';

      assert.strictEqual(anagramCheck(string1, string2), false);
    });
  });
});