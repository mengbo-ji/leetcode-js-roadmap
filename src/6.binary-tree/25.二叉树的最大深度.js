/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = function(root) {
  if (!root) return 0;
  let num = 0;
  if (root.children) {
    root.children.forEach(v => {
      const n = maxDepth(v);
      num = Math.max(num, n);
    });
  }
  return num + 1;
};

