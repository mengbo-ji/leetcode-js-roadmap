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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  // 广度优先遍历
  // const paths = [];
  // if (root === null) return paths;

  // const nodeQueue = [root];
  // const pathQueue = [root.val.toString()];

  // while(nodeQueue.length) {
  //     const node = nodeQueue.shift();
  //     const path = pathQueue.shift();
  //     if (node.left === null && node.right === null) {
  //         paths.push(path);
  //     } else {
  //         if (node.left !== null) {
  //             nodeQueue.push(node.left);
  //             pathQueue.push(path + '->' + node.left.val.toString())
  //         }
  //         if (node.right !== null) {
  //             nodeQueue.push(node.right);
  //             pathQueue.push(path + '->' + node.right.val.toString())
  //         }
  //     }
  // }
  // return paths;


  // 深度优先
  const paths = [];
  function getH(root, path) {
    if (root) {
      path += root.val.toString();
      if (root.left === null && root.right === null) {
        paths.push(path);
      } else {
        path += '->';
        getH(root.left, path);
        getH(root.right, path);
      }
    }
  }
  getH(root, '');
  return paths;
};
