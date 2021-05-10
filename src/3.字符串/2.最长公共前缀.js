/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let res = '';
  let maxPrefixLength = 200;
  strs.forEach(v => {
    if (v.length < maxPrefixLength) {
      maxPrefixLength = v.length;
    }
  });

  for (let i = 0; i < maxPrefixLength; i++) {
    const set = new Set();
    strs.forEach(v => {
      set.add(v[i] || '');
    })
    if (set.size === 1) {
      res += [...set][0]
    } else {
      return res;
    }
  }
  return res;
};