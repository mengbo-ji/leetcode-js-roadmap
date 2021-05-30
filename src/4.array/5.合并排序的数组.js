/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
const merge = function (A, m, B, n) {
  A.splice(m);
  for (let i = 0; i < n; i++) {
    A.push(B[i]);
  }
  return A.sort((a, b) => a - b);
};