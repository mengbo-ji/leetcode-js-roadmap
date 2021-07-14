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
const sumOfLeftLeaves = function(root) {
  let sum = 0;
  const arr = [ root ];
  while (arr.length) {
    const { left, right } = arr.shift();
    if (left) {
      // 左右都不存在，这就是叶子节点
      if (!left.left && !left.right) {
        sum += left.val;
      } else {
        arr.push(left);
      }
    }
    if (right) {
      arr.push(right);
    }
  }
  return sum;
};
