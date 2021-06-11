/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let len = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[j] < nums[i]) {
        len++;
      }
    }
    res.push(len);
    len = 0;
  }
  return res;
};
