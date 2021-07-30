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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function(root, low, high) {
  // 递归出口
  if (!root) return 0;
  // 如果当前节点比hight大, 直接遍历左子树
  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }
  // 如果当前节点比low小, 直接遍历右子树
  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }
  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};
