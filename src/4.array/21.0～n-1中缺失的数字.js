/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  // 防止缺失的一个
  nums.push('x');
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};
