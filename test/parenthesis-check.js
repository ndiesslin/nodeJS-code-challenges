var assert = require('assert');
const { parenthesisCheck } = require('../challenges/parenthesis-check.js')

describe('Check if parenthesis are correctly open and closed.', function () {
  describe('#parenthesisCheck()', function () {
    it('should return true if valid.', function () {
      const parenthesisGroup = '((()))()';

      assert(parenthesisCheck(parenthesisGroup));
    });
    
    it('should return false if invalid.', function () {
      const parenthesisGroup = ')((()))()';

      assert.strictEqual(parenthesisCheck(parenthesisGroup), false);
    });
  });
});