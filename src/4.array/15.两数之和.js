/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  // for (let i = 0; i < numbers.length; i++) {
  //     const cur = numbers[i];
  //     for (let j = i + 1; j < numbers.length; j++) {
  //         if (cur + numbers[j] === target) {
  //             return [ i + 1, j + 1 ]
  //         }
  //     }
  // }
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [ map.get(target - numbers[i]), i + 1 ];
    }
    map.set(numbers[i], i + 1);

  }
};
