/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
  // 当前 = Math.min(前一步 + 前两步) + cost[i]
  let prev = cost[0],
    curr = cost[1];
  for (let i = 2; i <= cost.length; i++) {
    const next = Math.min(prev, curr) + (cost[i] || 0);
    prev = curr;
    curr = next;
  }
  return curr;
};
