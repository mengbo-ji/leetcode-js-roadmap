/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
  return nums.map(v => (v = Math.pow(v, 2))).sort((a, b) => a - b);
};
