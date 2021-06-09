/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  const res = [];
  if (!nums.length) {
    return res;
  }
  if (nums.length === k) {
    res.push(Math.max(...nums));
    return res;
  }
  if (k <= 1) {
    return nums;
  }
  for (let i = 0; i < nums.length; i++) {
    const temp = nums.slice(i, k + i);
    if (temp.length < k) {
      return res;
    }
    res.push(Math.max(...temp));

  }
};

const maxSlidingWindow1 = function(nums, k) {
  if (k <= 1) return nums;
  const res = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    res.push(Math.max(...nums.slice(i, i + k)));
  }
  return res;
};
