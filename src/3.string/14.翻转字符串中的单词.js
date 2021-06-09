/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  const arr = s.split(' ');
  const res = arr.map(v => {
    return v.split('').reverse().join('');
  });
  return res.join(' ');
};
