/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (needle === '') {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  const targetLength = needle.length;
  for (let i = 0; i <= haystack.length - targetLength; i++) {
    if (needle === haystack.substr(i, targetLength)) {
      return i;
    }
  }
  return -1;
};
