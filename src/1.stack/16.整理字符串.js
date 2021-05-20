/**
 * @param {string} s
 * @return {string}
 */
// const makeGood = function(s) {
//     const stack = [];
//     stack.push(s[0]);
//     for (let i = 1; i < s.length; i++) {
//         const prev = stack[stack.length - 1];
//         const next = s[i];
//         if (prev) {
//             // 大写
//             if (prev === prev.toUpperCase()) {
//                 if (next === prev.toLowerCase()) {
//                     stack.pop();
//                 } else {
//                     stack.push(next);
//                 }
//             }
//             // 小写
//             if (prev === prev.toLowerCase()) {
//                 if (next === prev.toUpperCase()) {
//                     stack.pop();
//                 } else {
//                     stack.push(next);
//                 }
//             }
//         } else {
//             stack.push(s[i]);
//         }
//     }

//     return stack.join('');
// };

const makeGood = function (s) {
  const res = [];
  for (let v of s) {
    if (res.length &&
      res[res.length - 1] !== v &&
      res[res.length - 1].toUpperCase() === v.toUpperCase()) {
      res.pop();
    } else {
      res.push(v);
    }
  }
  return res.join('');
}