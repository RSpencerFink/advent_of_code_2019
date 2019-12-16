const { input } = require('./input.js');
const { parseIntcode } = require('./1');

const target = 19690720;

function searchIntcode() {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const inputCopy = input.slice();
      inputCopy[1] = noun;
      inputCopy[2] = verb;
      const output = parseIntcode(inputCopy)[0];
      if (output === target) {
        console.log(noun, verb);
        return 100 * noun + verb;
      }
    }
  }
}

console.log(searchIntcode());
