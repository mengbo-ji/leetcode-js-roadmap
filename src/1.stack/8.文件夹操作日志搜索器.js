/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function (logs) {
  let res = 0;
  for (let v of logs) {
    switch (v) {
      case './':
        res += 0;
        break;
      case '../':
        if (res) {
          res += -1
        } else {
          res = 0
        }
        break
      default:
        res += 1
        break;
    }
  }
  return res;
};