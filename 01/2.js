const { readLines } = require('../helpers/readLines');

function calculateFuel() {
  var input = readLines('./input.txt');
  var totalFuel = 0;
  for (var idx = 0; idx < input.length; idx += 1) {
    var mass = parseInt(input[idx]);
    var fuelCost = Math.floor(mass / 3) - 2;
    while (fuelCost > 0) {
      totalFuel += fuelCost;
      mass = fuelCost;
      fuelCost = Math.floor(mass / 3) - 2;
    }
  }
  return totalFuel;
}

console.log(calculateFuel());
