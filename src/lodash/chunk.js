const _ = require('lodash');
const arr = [ 1, 2, 3, 4 ];
console.log('_.chunk(arr, 2);', _.chunk(arr, 2));

// const _chunk = (input, size) => {
//   return input.reduce((arr, item, idx) => {
//     const currentArr = idx % size === 0
//       ? [ ...arr, [ item ]]
//       : [ ...arr.slice(0, -1), [ ...arr.slice(-1)[0], item ]];
//     return currentArr;
//   }, []);
// };


const _chunk = (array, size = 1) => {
  size = Math.max(size, 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resultIndex = 0;
  const result = new Array(Math.ceil(length / size));
  while (index < length) {
    result[resultIndex++] = array.slice(index, index += size);
  }
  return result;
};

console.log('_chunk', _chunk(arr));

const _chunk1 = (array, size) => {
  size = Math.max(size, 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }

  let index = 0;
  let resultIndex = 0;
  const result = [];
  while (index < length) {
    result[resultIndex++] = array.slice(index, index += size);
  }
  return result;
};

const _chunk2 = (array, size) => {
  size = Math.max(size, 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }

  let index = 0;
  let resultIndex = 0;
  const result = [];
  while (index < length) {
    result[resultIndex++] = array.slice(index, index += size);
  }
  return result;
};

