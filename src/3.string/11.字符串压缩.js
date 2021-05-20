/**
 * @param {string} S
 * @return {string}
 */
const compressString = function (s) {
  let stack = [];
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      stack.push(s[i]);
      continue;
    }
    if (stack[stack.length - 1] === s[i]) {
      stack.push(s[i]);
    } else {
      res += stack[0] + stack.length;
      stack = [];
      stack.push(s[i]);
    }
  }
  res += stack[0] + stack.length;
  return s.length > res.length ? res : s;
};

/**
 * @param {string} S
 * @return {string}
 */
const compressString = function (s) {
  let res = '';
  let count = 1;
  let index = 0;
  while (index < s.length) {
    if (s[index] !== s[index + 1]) {
      res += s[index] + count;
      count = 1;
    } else {
      count++
    }
    index++
  }
  return s.length > res.length ? res : s;
};
