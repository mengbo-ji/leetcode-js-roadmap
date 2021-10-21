const _ = require('lodash');
const arr = [ 1, 2, 3, 4 ];
console.log('_.chunk(arr, 2);', _.chunk(arr, 2));

const _chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    const currentArr = idx % size === 0
      ? [ ...arr, [ item ]]
      : [ ...arr.slice(0, -1), [ ...arr.slice(-1)[0], item ]];
    return currentArr;
  }, []);
};
console.log(_chunk(arr, 3));

