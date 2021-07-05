/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
  if (!root) {
    return false;
  }
  // 递归遍历树的左右两侧，如果都为null的时候 判断targetSum和当前节点的值是否相等，如果相等就返回
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
