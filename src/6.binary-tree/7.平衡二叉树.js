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
const isBalanced = function(root) {
  // // 获取当前节点高度的递归函数
  const getH = root => {
    if (!root) return 0;
    // 返回左右节点的最大高度+1,（+1:根节点）
    return Math.max(getH(root.left), getH(root.right)) + 1;
  };
  if (!root) return true;
  return (
  // 根节点的左右高度差不大于1
    Math.abs(getH(root.left) - getH(root.right)) <= 1 &&
      // 左子树是平衡二叉树
      isBalanced(root.left) &&
      // 右字数是平衡二叉树
      isBalanced(root.right)
  );
};
