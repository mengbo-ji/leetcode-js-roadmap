
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  if (!s || s.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  for (const v of s) {
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
      default:
        break;
    }
  }
  return !stack.length;
};
