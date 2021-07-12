/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  // 当数组为奇数时比如 [0, 1, 2], 此时取中间数 1 为根节点, 0 和 2 分别为其左右子节点, 此时满足高度平衡的条件。
  // 当数组为偶数时比如 [0, 1], 此时取中间数 1 为根节点, 0 为其左右子节点, 此时满足高度平衡的条件。
  if (!nums.length) return null;
  const mid = Math.floor(nums.length / 2);
  const res = new TreeNode(nums[mid]);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1);
  res.left = sortedArrayToBST(left);
  res.right = sortedArrayToBST(right);
  return res;
};
