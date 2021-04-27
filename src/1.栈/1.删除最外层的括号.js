/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function (s) {
  if (!s || s.length % 2 !== 0) {
    return false;
  }
  let stack = [];
  let res = '';
  for (let v of s) {
    switch (v) {
      case '(':
        const newLength = stack.push(v);
        if (newLength > 1) {
            res += '(';
        }
        break;
      case ')':
        const l = stack.length;
        if (l > 1) {
          res += ')'
          stack.pop()
        } else {
            stack = [];
        }
    }
  }
  return res;
};
