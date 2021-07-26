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
const averageOfLevels = function(root) {
  if (!root) return [];
  const queue = [ root ];
  const res = []; // 结果
  let level = 0; // 层级

  while (queue.length) {
    res[level] = [];

    let l = queue.length;
    while (l--) {
      const node = queue.shift();
      res[level].push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    level++;
  }

  return res.map(num => num.reduce((prev, next) => prev + next, 0) / num.length);
};
