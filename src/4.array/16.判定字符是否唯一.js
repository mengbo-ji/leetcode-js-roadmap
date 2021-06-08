/**
 * @param {string} astr
 * @return {boolean}
 */
const isUnique = function (astr) {
  const map = new Map();
  for (let v of astr) {
    if (map.has(v)) {
      return false;
    } else {
      map.set(v, v);
    }
  }
  return true;
};