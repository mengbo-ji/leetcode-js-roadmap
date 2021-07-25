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
const isSymmetric = function(root) {
  if (!root) return true;
  function isEqual(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val &&
      isEqual(left.left, right.right) &&
      isEqual(left.right, right.left);
  }
  return isEqual(root.left, root.right);
};
