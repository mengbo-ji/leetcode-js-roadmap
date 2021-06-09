/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const arr = s.toLowerCase().match(/[A-Za-z0-9]+/g);
  if (!arr) return true;
  const str = arr.join('');
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};
