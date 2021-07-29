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
 * @return {number[]}
 */
const findMode = function(root) {
  let res = {},
    maxCount = 0,
    r = [],
    dfs = root => {
      res[root.val] = (res[root.val] || 0) + 1;
      if (res[root.val] >= maxCount) {
        res[root.val] > maxCount && (r.length = 0);
        maxCount = res[root.val];
        r.push(root.val);
      }
      root.left && dfs(root.left) || root.right && dfs(root.right);
    };
  return root && dfs(root) || r || [];
};
