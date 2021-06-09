/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const res = [];
    let prev = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      res.push(prev + nums[j]);
      prev = prev + nums[j];
    }

    const maxTemp = Math.max(...res);
    if (maxTemp > max) {
      max = maxTemp;
    }
  }

  return nums.sort((a, b) => b - a).some(v => v > max) || max === 0 ? nums[0] : max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray1 = function(nums) {
  // 1.假如全是负数，那就是找最大值即可，因为负数肯定越加越大。 2.如果有正数，则肯定从正数开始计算和，不然前面有负值，和肯定变小了，所以从正数开始。 3.当和小于零时，这个区间就告一段落了，然后从下一个正数重新开始计算(也就是又回到 2 了)。而 dp 也就体现在这个地方
  let sum = 0,
    ans = nums[0];
  for (const v of nums) {
    if (sum > 0) {
      sum += v;
    } else {
      sum = v;
    }
    ans = Math.max(ans, sum);
  }

  return ans;
};
