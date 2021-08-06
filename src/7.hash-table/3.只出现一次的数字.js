/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  // const map = new Map();
  // for (const v of nums) {
  //   if (map.has(v)) {
  //     map.set(v, 2);
  //   } else {
  //     map.set(v, 1);
  //   }
  // }
  // for (const [ key, v ] of map.entries()) {
  //   if (v === 1) {
  //     return key;
  //   }
  // }
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};
