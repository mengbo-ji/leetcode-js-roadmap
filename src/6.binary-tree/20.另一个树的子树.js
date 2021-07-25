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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function(r, s) {
  if (r == null) {
    return false;
  }
  if (isSameTree(r, s)) {
    return true;
  }
  return isSubtree(r.left, s) || isSubtree(r.right, s);// 只要有一个为true 就为true
};
/*
isSameTree
  两树同为 null 则相同
  一个 null 一个不是，则不同；
  两个树都不为 null，则递归判断左右子树是否相同
*/
function isSameTree(r, s) { // 100题
  if (r == null && s == null) {
    return true;
  }
  if (r == null || s == null) {
    return false;
  }
  return r.val === s.val && isSameTree(r.left, s.left) && isSameTree(r.right, s.right);
}
