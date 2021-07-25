/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  // 获取当前节点高度
  function getH(root) {
    if (!root) return 0;
    return Math.max(getH(root.left), getH(root.right)) + 1;
  }
  if (!root) return true;
  return (
    Math.abs(getH(root.left) - getH(root.right)) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
  );
};
