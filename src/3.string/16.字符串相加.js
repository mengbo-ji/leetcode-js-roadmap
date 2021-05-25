/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let ans = 0;
let sum = [];
var addStrings = function (num1, num2) {
  let num1Last = num1.slice(-1);
  let num2Last = num2.slice(-1);

  function add (a, b) {
    const sumNow = +a + +b + ans;
    ans = sumNow > 9 ? 1 : 0;
    // 按位与 取0
    return sumNow % 10 | 0;
  }

  sum.unshift(add(num1Last, num2Last));

  let statusNum1 = num1.slice(0, num1.length - 1);
  let statusNum2 = num2.slice(0, num2.length - 1);

  if (statusNum1 === '' && statusNum2 === '') {
    const res = ans ? ans + sum.join('') : sum.join('');
    ans = 0;
    sum = [];
    return res;
  } else {
    return addStrings(!statusNum1 ? '0' : statusNum1, !statusNum2 ? '0' : statusNum2);
  }
};
