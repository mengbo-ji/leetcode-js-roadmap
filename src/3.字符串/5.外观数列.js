/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let prev = '1'
  for (let i = 1; i < n; i++) {
    // 正则重复匹配数字
    prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  return prev
};
