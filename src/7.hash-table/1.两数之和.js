/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = target - nums[i];
    if (map.has(cur)) {
      return [ map.get(cur), i ];
    }
    map.set(nums[i], i);
  }
};
