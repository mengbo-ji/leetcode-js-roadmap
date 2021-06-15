/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function(words, chars) {
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    const s = words[i];
    let c = chars,
      flag = true,
      j = 0;
    while (j < s.length) {
      if (c.indexOf(s[j]) === -1) {
        flag = false;
        break;
      }
      c = c.replace(s[j], '');
      j++;
    }
    if (flag) {
      res += s.length;
    }
  }
  return res;
};
