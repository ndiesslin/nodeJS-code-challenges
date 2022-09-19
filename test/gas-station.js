var assert = require('assert');
const { gasStation } = require('../challenges/gas-station.js')

describe('Check for a gas station that can travel round trip.', function () {
  describe('#gasStation()', function () {
    it('should return 8 for provided station and cost.', function () {
      const gas = [1,5,3,3,5,3,1,3,4,5];
      const cost = [5,2,2,8,2,4,2,5,1,2];
      const expectValue = [8]

      assert.deepEqual(gasStation(gas, cost), expectValue);
    });
  });
});