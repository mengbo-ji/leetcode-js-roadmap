
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false
  }
  let stack = [];
  for (let v of s) {
    switch (v) {
      case '(':
      case '[':
      case '{':
        stack.push(v);
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
    }
  }
  return !stack.length
};
