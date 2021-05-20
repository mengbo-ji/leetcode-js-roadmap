/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  // const res = (parseInt(a,2) + parseInt(b,2)).toString(2)
  // 用Bigint防止益处
  const res = (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)

  return res;
};