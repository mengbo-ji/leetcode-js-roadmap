/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
  const sum = [];
  nums.reduce((prev, next) => {
    sum.push(prev + next);
    return prev + next;
  }, 0);

  return sum;
};
