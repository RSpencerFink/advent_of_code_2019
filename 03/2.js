const { readLines } = require('../helpers/readLines');

const findCrossedWires = () => {
  let input = readLines('./input.txt');
  input = input.map(line => line.split(','));
  let grid = {};
  grid = mapWire(grid, input[0], 'A');
  grid = mapWire(grid, input[1], 'B');
  const crosses = [];
  Object.keys(grid).forEach(el => {
    if (Object.keys(grid[el].wires).length > 1) {
      crosses.push(grid[el]);
    }
  });
  return minSteps(crosses);
};

const mapWire = (grid, wire, label) => {
  let x = 0;
  let y = 0;
  let steps = 0;
  wire.forEach(el => {
    const direction = el.charAt(0);
    const distance = parseInt(el.substr(1));
    for (let idx = 0; idx < distance; idx++) {
      if (grid[`${x}_${y}`]) {
        if (!grid[`${x}_${y}`].wires[label]) {
          grid[`${x}_${y}`].wires[label] = steps;
        }
      } else {
        grid[`${x}_${y}`] = {
          x,
          y,
          wires: {}
        };
        grid[`${x}_${y}`].wires[label] = steps;
      }
      if (direction === 'U') {
        y++;
      }
      if (direction === 'D') {
        y--;
      }
      if (direction === 'R') {
        x++;
      }
      if (direction === 'L') {
        x--;
      }
      steps++;
    }
  });
  return grid;
};

const minSteps = crosses => {
  let min;
  crosses.forEach(el => {
    let stepSum = Object.values(el.wires).reduce((acc, el) => (acc += el));
    if (!min || stepSum < min) {
      min = stepSum;
    }
  });
  return min;
};

console.log(findCrossedWires());
