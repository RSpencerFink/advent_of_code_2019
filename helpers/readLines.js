var fs = require('fs');

function readLines(inputPath) {
  var array = fs
    .readFileSync(inputPath)
    .toString()
    .split('\n');

  return array;
}

module.exports = { readLines: readLines };
