/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const map = new Map();
  for (let v of nums) {
    if (map.has(v)) {
      return true;
    } else {
      map.set(v, v);
    }
  }
  return false;
};