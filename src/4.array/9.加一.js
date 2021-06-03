/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let carry = false;
  digits[digits.length - 1]++;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry) digits[i]++;
    carry = digits[i] > 9;
    digits[i] = digits[i] % 10;
  }
  if (carry) digits.unshift(1);
  return digits;
};
