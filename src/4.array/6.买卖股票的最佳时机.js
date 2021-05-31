/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let max = 0, min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};