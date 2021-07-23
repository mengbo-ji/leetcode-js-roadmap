/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  if (!root) return [];
  const queue = [ root ];
  const res = []; // 结果
  let level = 0;
  while (queue.length) {
    res[level] = []; // 第几层遍历的结果

    let levelNum = queue.length;
    while (levelNum--) {
      const node = queue.shift();
      res[level].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }
  return res;
};
