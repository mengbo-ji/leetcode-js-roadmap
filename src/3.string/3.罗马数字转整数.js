/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let prev = map[s[i]];
    const next = map[s[i + 1]];
    console.log('prev', prev);
    console.log('next', next);
    // 如果前一个值小于后一个值 那么后一个减去前一个
    if (prev < next) {
      prev = next - prev;
      i++;
    }
    sum += prev;
  }
  return sum;
};
