/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  // 终止条件
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
