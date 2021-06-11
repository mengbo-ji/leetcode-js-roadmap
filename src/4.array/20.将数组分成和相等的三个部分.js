/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = function(arr) {
  const sumA = arr.reduce((prev, next) => prev + next, 0);
  // 总和如果不能被3整除那么返回false
  if (sumA % 3 !== 0) return false;
  const part = sumA / 3;
  let groupCount = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum === part) {
      groupCount++;
      currentSum = 0;
    }
    if (groupCount === 3) {
      return true;
    }
  }
  return groupCount === 3;
};
