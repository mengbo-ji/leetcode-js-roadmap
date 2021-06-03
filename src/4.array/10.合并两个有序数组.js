/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.forEach(v => {
    nums1.push(v);
  });
  return nums1.sort((a, b) => a - b);
};