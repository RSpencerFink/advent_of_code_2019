const { readLines } = require('../helpers/readLines');

function calculateFuel() {
  var input = readLines('./input.txt');
  var totalFuel = 0;
  for (var idx = 0; idx < input.length; idx += 1) {
    var mass = parseInt(input[idx]);
    totalFuel += Math.floor(mass / 3) - 2;
  }
  return totalFuel;
}

console.log(calculateFuel());
