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
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
  if (root == null) {
    return [];
  }
  const queue = [ root ]; // 借助队列来实现遍历
  const res = [];
  while (queue.length) {
    const subRes = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      subRes.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    res.push(subRes);
  }
  return res.reverse();
};
