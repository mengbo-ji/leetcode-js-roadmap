/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  if (!root || root.val === p.val || root.val === q.val) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 左子树找不到，返回右子树
  if (!left) return right;
  // 右子树找不到，返回左子树
  if (!right) return left;
  // 左右子树都找到了，那么root就是要找的
  return root;
};



