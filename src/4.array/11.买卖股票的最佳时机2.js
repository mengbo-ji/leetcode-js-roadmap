/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  // 贪心算法 只要赚钱就加
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    sum += Math.max(0, prices[i] - prices[i - 1]);
  }
  return sum;
};