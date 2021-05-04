/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function (target, n) {
  const stack = [];
  if (target.length === n) {
    stack.length = n;
    stack.fill('Push')
    return stack;
  }
  let index = 1;
  for (let i = 0; i < target.length; i++) {
    if (target[i] === index) {
      stack.push('Push');
    } else {
      for (let j = 0; j < target[i] - index; j++) {
        stack.push('Push');
        stack.push('Pop');
        i--
      }
    }
    index++;
  }
  return stack;
};
// var buildArray = function (target, n) {
//   let stack = [], _stack = [];
//   for (let i = 0; i < n; i++) {
//     _stack.push(i + 1);
//     stack.push("Push");
//     if (_stack[_stack.length - 1] !== target[_stack.length - 1]) {
//       stack.push("Pop");
//       _stack.pop();
//     }
//     if (target.length === _stack.length) return stack;
//   }
//   return stack;
// };
