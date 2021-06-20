/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      sum += 1;
    }
  }
  return sum;
};
