/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function(nums) {
  const map = new Map();
  for (const v of nums) {
    if (map.has(v)) {
      return v;
    }
    map.set(v, v);
  }
};
