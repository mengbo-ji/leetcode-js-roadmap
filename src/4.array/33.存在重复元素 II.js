/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = map.get(nums[i]);
    if (cur && cur.value === nums[i]) {
      if (Math.abs(cur.index - i) <= k) {
        return true;
      }
    }
    map.set(nums[i], { index: i, value: nums[i] });
  }
  return false;
};
