/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const CheckPermutation = function(s1, s2) {
  const res1 = s1.split('').sort((a, b) => {
    return a.charCodeAt(0) - b.charCodeAt(0);
  });
  const res2 = s2.split('').sort((a, b) => {
    return a.charCodeAt(0) - b.charCodeAt(0);
  });
  return res1.join('') === res2.join('');
};
