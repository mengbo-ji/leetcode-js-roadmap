/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i
    }
  }
  return nums.length;
};