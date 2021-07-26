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
const getMinimumDifference = function(root) {
  const list = [];
  let num = Number.MAX_VALUE;
  const dfs = root => {
    if (!root) return;
    list.push(root.val);
    if (root.left) dfs(root.left);
    if (root.right) dfs(root.right);
  };
  dfs(root);

  list.sort((a, b) => a - b);
  for (let i = 1; i < list.length; i++) {
    num = Math.min(num, list[i] - list[i - 1]);
  }
  return num;
};
