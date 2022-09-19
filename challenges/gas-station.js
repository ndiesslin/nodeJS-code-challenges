// Gas stations that a can car travel round trip from?
// Each station has gas added and the price subtracted.

// The starting value is 0
// add gas
// minus cost
// const gas = [1,5,3,3,5,3,1,3,4,5];
// const cost = [5,2,2,8,2,4,2,5,1,2];

// Example from position 0.
// 1 - 5 = -4
// Example from position 1.
// 5 - 2 = 3, (3 + 3) - 2 = 4, (4 + 3) - 8 = -1

const gasStation = function(gas, cost) {
  const possibleStops = []

  // Loop through each stop.
  gas.forEach((gasStop, index) => {
    // Budget starts at 0 for each start.
    let budget = 0;

    // Adjust arrays based on current index.
    let gasFront = gas.slice(0, index)
    let gasBack = gas.slice(index, gas.length);
    let adjustedGas = gasBack.concat(gasFront);

    let costFront = cost.slice(0, index)
    let costBack = cost.slice(index, cost.length);
    let adjustedCost = costBack.concat(costFront);

    // Loop through adjusted array with correct starting position.
    let fullLoop = adjustedGas.every((adjustedGasStop, adjustedIndex) => {
      let stopCost = budget += (adjustedGas[adjustedIndex] - adjustedCost[adjustedIndex]);

      if (stopCost >= 0) {
        return true;
      } else {
        return false;
      }
    });

    if (fullLoop) {
      possibleStops.push(index);
    }
  });

  return possibleStops;
}

module.exports = { gasStation };