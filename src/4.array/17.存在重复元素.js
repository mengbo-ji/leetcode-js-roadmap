/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const map = new Map();
  for (const v of nums) {
    if (map.has(v)) {
      return true;
    }
    map.set(v, v);

  }
  return false;
};
