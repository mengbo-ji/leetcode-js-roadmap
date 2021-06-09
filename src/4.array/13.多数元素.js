/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const len = nums.length / 2;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const curLen = map.get(cur);
    if (curLen) {
      map.set(cur, curLen + 1);
      if (map.get(cur) > len) {
        return cur;
      }
    } else {
      map.set(cur, 1);
      if (map.get(cur) > len) {
        return cur;
      }
    }
  }
};
