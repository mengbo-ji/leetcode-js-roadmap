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
const minDepth = function(root) {
  // 注意题意：叶子节点是指没有子节点的节点。
  // 叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
  // 当 root 节点左右孩子都为空时，返回 1
  // 当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
  // 当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值
  if (root == null) return 0;
  // 1.左孩子和右孩子都为空的情况，说明到达了叶子节点，直接返回1即可
  if (root.left == null && root.right == null) return 1;
  // 2.如果左孩子和右孩子其中一个为空，那么需要返回比较大的那个孩子的深度
  const minL = minDepth(root.left);
  const minR = minDepth(root.right);
  // 这里其中一个节点为空，说明m1和m2有一个必然为0，所以可以返回minL + minR + 1;
  if (root.left == null || root.right == null) return minL + minR + 1;

  // 3.最后一种情况，也就是左右孩子都不为空，返回最小深度+1即可
  return Math.min(minL, minR) + 1;
};
