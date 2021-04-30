/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function (ops) {
  const stack = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case 'C':
        stack.pop();
        break;
      case 'D':
        stack.push(stack[stack.length - 1] * 2);
        break;
      case '+':
        stack.push(+stack[stack.length - 1] + +stack[stack.length - 2]);
        break;
      default:
        stack.push(+ops[i]);
    }
  }
  return stack.reduce((prev, next) => prev + next, 0);
};