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
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
  // 找出树高度
  // 返回最后最大的高度
  if (!root) return 0;
  const h = getH(root.left) + getH(root.right);
  return Math.max(h, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right));
};

function getH(node) {
  if (node == null) return 0;
  return Math.max(getH(node.left), getH(node.right)) + 1;
}
