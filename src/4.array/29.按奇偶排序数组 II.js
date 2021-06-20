/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = function(nums) {
  const odd = [];
  const even = [];
  const res = [];
  nums.forEach(v => {
    if (v % 2 === 0) {
      even.push(v);
    } else {
      odd.push(v);
    }
  });
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      res.push(even.pop());
    } else {
      res.push(odd.pop());
    }
  }
  return res;
};
