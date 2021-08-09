/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  let sum = 0;
  const set = new Set();
  s.split('').forEach(v => {
    if (set.has(v)) {
      set.delete(v);
      sum += 2;
    } else {
      set.add(v);
    }
  });
  return sum + (set.size > 0 ? 1 : 0);
};
