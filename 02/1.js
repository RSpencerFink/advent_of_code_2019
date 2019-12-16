var { input } = require('./input.js');

function parseIntcode(instructions) {
  for (var idx = 0; idx < instructions.length; idx += 4) {
    var operator = instructions[idx];
    if (operator === 99) return instructions;

    var location1 = instructions[idx + 1];
    var location2 = instructions[idx + 2];
    var target = instructions[idx + 3];

    if (operator === 1) {
      var sum = instructions[location1] + instructions[location2];
      instructions[target] = sum;
    }
    if (operator === 2) {
      var product = instructions[location1] * instructions[location2];
      instructions[target] = product;
    }
  }
}

module.exports = { parseIntcode: parseIntcode };

// console.log(parseIntcode(input));
