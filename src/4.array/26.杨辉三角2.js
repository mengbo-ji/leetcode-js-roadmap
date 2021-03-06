/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  if (rowIndex === 0) return [ 1 ];
  const res = [];
  // 如果不是数组的首位和结尾，那么他当前的数据等于res[i - 1][j - 1] + res[i - 1][j]
  for (let i = 0; i <= rowIndex; i++) {
    const subArr = [];
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) {
        subArr.push(res[i - 1][j - 1] + res[i - 1][j]);
      } else {
        subArr.push(1);
      }
    }
    res.push(subArr);
  }
  return res[res.length - 1];
};
