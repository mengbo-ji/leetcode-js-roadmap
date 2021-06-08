/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const res = [];
  // 如果不是数组的首位和结尾，那么他当前的数据等于res[i - 1][j - 1] + res[i - 1][j]
  for (let i = 0; i < numRows; i++) {
    let subArr = [];
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) {
        subArr.push(res[i - 1][j - 1] + res[i - 1][j])
      } else {
        subArr.push(1);
      }
    }
    res.push(subArr);
  }
  return res;
};