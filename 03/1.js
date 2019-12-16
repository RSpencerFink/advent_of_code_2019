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
  return minManhattanDistance(crosses);
};

const mapWire = (grid, wire, label) => {
  let x = 0;
  let y = 0;
  wire.forEach(el => {
    const direction = el.charAt(0);
    const distance = parseInt(el.substr(1));
    for (let idx = 0; idx < distance; idx++) {
      if (grid[`${x}_${y}`]) {
        grid[`${x}_${y}`].wires[label] = true;
      } else {
        grid[`${x}_${y}`] = {
          x,
          y,
          wires: {}
        };
        grid[`${x}_${y}`].wires[label] = true;
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
    }
  });
  return grid;
};

const minManhattanDistance = crosses => {
  let min;
  crosses.forEach(el => {
    let distance = Math.abs(el.x - el.y);
    if (!min || distance < min) {
      min = distance;
    }
  });
  return min;
};

console.log(findCrossedWires());
