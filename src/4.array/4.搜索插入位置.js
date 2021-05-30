/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target < nums[0]) {
      return 0;
    }
    if (target > nums[nums.length - 1]) {
      return nums.length;
    }
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] < target && target < nums[i + 1]) {
      return i + 1;
    }
  }
};