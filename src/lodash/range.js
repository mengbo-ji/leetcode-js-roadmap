const _ = require('lodash');
console.log(_.range(4));
console.log(_.range(-4));
console.log(_.range(1, 5));
console.log(_.range(0, 20, 5));

// native
const _range = (start, end, step) => {
  console.log(Array.from({ length: 4 }, (_, i) => i));
  console.log(Array.from({ length: 4 }, (_, i) => -i));
  console.log(Array.from({ length: 4 }, (_, i) => i + 1));
  console.log(Array.from({ length: 4 }, (_, i) => i * 5));
};

_range();
