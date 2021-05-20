/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// const nextGreaterElement = function(nums1, nums2) {
//     let res = [];
//     for (let i = 0; i < nums1.length; i++) {
//         let index = 0;
//         let value = nums1[i];
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i] === nums2[j]) {
//                 index = j + 1;
//                 continue;
//             }
//         }
//         const arr = nums2.slice(index);
//         let l = 0;
//         let flag = false;
//         while(l !== arr.length){
//             if (arr[l++] > value) {
//                 res.push(arr[l - 1]);
//                 flag = true;
//                 break;
//             }
//         }
//         if (flag) {
//             flag = false;
//         } else {
//             res.push(-1);
//         }
//     }
//     return res;
// };
let nextGreaterElement = function (nums1, nums2) {
  let map = new Map(), stack = [], ans = [];
  nums2.forEach(item => {
    while (stack.length && item > stack[stack.length - 1]) {
      map.set(stack.pop(), item)
    };
    stack.push(item);
  });
  console.log('map', map)
  console.log('stack', ans)
  console.log('ans', ans)
  stack.forEach(item => map.set(item, -1));
  nums1.forEach(item => ans.push(map.get(item)));
  return ans;
};


