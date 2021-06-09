/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/**
如果一条边从头遍历到底，则下一条边遍历的起点随之变化。如果不遍历到底，可以减小横向和竖向遍历之间的影响。
我选择一次迭代遍历一个“圈”，然后 4 条边的两端同时收缩，一层层向内处理，按顺时针依次遍历：上、右、下、左层。
不再形成“环”了就结束遍历，剩下一行或一列，然后单独判断即可。
上边界 top : 0
下边界 bottom : matrix.length - 1
左边界 left : 0
右边界 right : matrix[0].length - 1
矩阵不一定是方阵
top < bottom && left < right 是循环的条件。
结束循环时，分 3 种情况：
top == bottom && left < right —— 剩一行。
top < bottom && left == right —— 剩一列。
top == bottom && left == right —— 剩一项（也是一行/列）。
处理剩下的单行或单列
因为是按顺时针推入结果数组的，所以：
剩下的一行，从左至右 依次推入结果数组。
剩下的一列，从上至下 依次推入结果数组。
 */
const spiralOrder = function(matrix) {
  if (!matrix.length) {
    return [];
  }
  const res = [];
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (top < bottom && left < right) {
    // 左—右
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    // 上-下
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right]);
    }
    // 右-左
    for (let i = right; i > left; i--) {
      res.push(matrix[bottom][i]);
    }
    // 下-上
    for (let i = bottom; i > top; i--) {
      res.push(matrix[i][left]);
    }
    top++;
    right--;
    bottom--;
    left++;
  }

  // 如果只剩一列
  if (left === right && top !== bottom) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
    // 如果只剩一行
  } else if (top === bottom && left !== right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    // 只剩单个
  } else if (top === bottom && left === right) {
    res.push(matrix[top][left]);
  }

  return res;
};
