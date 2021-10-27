const _ = require('lodash');
console.log(_.difference([ 3, 2, 1 ], [ 4, 2 ]));

// native
const _difference = (arr1, arr2) => {
  return arr1.filter(v => !arr2.includes(v));
};

console.log('_difference', _difference([ 3, 2, 1 ], [ 4, 2, 1 ]));
