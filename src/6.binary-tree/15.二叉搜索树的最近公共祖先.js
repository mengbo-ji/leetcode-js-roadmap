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
  // 根据二叉搜索树性质：如果 p.val 和 q.val 都比 root.val 小，则 p、q 肯定在 root 的左子树。
  // 那问题规模就变小了，递归左子树就行！
  // 如果 p.val 和 q.val 都比 root.val 大，递归右子树就行！
  // 其他情况，root 即为所求！那么简单吗？为什么？
  // 只要不是 p.val 和 q.val 都大于(小于) root.val，即只要 p, q 不同处在 root 的一个子树
  // 就只有这三种情况：
  // p 和 q 分居 root 的左、右子树。
  // root 就是 p，q 在 p 的子树中。
  // root 就是 q，p 在 q 的子树中
  // 而这三种情况，p 和 q 的最近公共祖先都是 root！是不是很简单！
  // if (p.val > root.val && q.val > root.val) {
  //     return lowestCommonAncestor(root.right, p, q)
  // }
  // if (p.val < root.val && q.val < root.val) {
  //     return lowestCommonAncestor(root.left, p, q)
  // }
  // return root;

  // 迭代版本
  while (root) {
    if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else {
      break;
    }
  }
  return root;
};
