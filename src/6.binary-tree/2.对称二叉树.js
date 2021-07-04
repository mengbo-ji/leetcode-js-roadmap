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
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if (!root) return true;
  function isEqual(left, right) {
    // 两颗树的根节点相同，左侧树的left节点和右侧树的right节点相同 或者 左侧树的right节点和右侧树的left节点相同
    // 如果两个节点都为null 返回true
    // 如果两个节点有一个为null 返回 false
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val &&
              isEqual(left.left, right.right) &&
              isEqual(left.right, right.left);
  }
  return isEqual(root.left, root.right);
};
