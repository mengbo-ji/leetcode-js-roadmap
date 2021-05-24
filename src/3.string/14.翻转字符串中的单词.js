/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  let arr = s.split(' ');
  let res = arr.map(v => {
    return v.split('').reverse().join('');
  })
  return res.join(' ')
};