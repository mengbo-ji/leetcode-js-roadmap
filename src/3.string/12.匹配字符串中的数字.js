/**
 * @param {string} s
 * @return {string}
 */
const s = 'aaaa/4/inde11x.html';
const findNumber = function (s) {
  let res = '';
  const arr = s.match(/(\/\d+\/)\1*/g);
  if (arr) {
    res = arr[0].substring(1, arr[0].length - 1);
  }
  return arr;
};
