/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function(root) {
  if (!root) return [];
  const res = [];
  // 根节点入栈
  const stack = [ root ];
  // 栈还有值的时候
  while (stack.length) {
    // 栈顶元素出栈
    const n = stack.pop();
    // 将栈顶元素推入res队列
    res.push(n.val);
    let len = n.children.length;
    // 如果栈顶元素有子树，子树从右开始，依次推入栈
    while (len--) {
      stack.push(n.children[len]);
    }
  }
  return res;
};
