/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  return [ ...s ].sort().join('') === [ ...t ].sort().join('');
};
