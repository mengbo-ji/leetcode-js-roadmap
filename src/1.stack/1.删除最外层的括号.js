/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function(s) {
  if (!s || s.length % 2 !== 0) {
    return false;
  }
  let stack = [];
  let res = '';
  for (const v of s) {
    switch (v) {
      case '(':
        if (stack.push(v) > 1) {
          res += '(';
        }
        break;
      case ')':
        if (stack.length > 1) {
          res += ')';
          stack.pop();
        } else {
          stack = [];
        }
        break;
      default:
        break;
    }
  }
  return res;
};
