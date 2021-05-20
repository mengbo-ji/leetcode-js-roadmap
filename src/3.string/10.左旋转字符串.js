/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = function (s, n) {
  let str = s.substring(n);
  let index = 1;
  while (n) {
    str = str + s.substring(index - 1, index);
    index++;
    n--;
  }
  return str;
};