/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) || map.get(nums[i]) === 0) {
      return nums[i];
    }
    map.set(nums[i], nums[i]);

  }
};
