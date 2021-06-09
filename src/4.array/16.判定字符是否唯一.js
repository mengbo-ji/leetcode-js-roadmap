/**
 * @param {string} astr
 * @return {boolean}
 */
const isUnique = function(astr) {
  const map = new Map();
  for (const v of astr) {
    if (map.has(v)) {
      return false;
    }
    map.set(v, v);

  }
  return true;
};
