/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthLargest = function(root, k) {
  const set = new Set();
  const dfs = root => {
    if (root === null) return;
    set.add(root.val);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  const res = [ ...set ].sort((a, b) => a - b);
  return res[res.length - k];
};
