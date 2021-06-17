/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  const res = [];
  arr2.forEach(item => {
    const temp = arr1.filter(v => v === item);
    arr1 = arr1.filter(v => v !== item);
    if (temp.length) {
      res.push(...temp);
    }
  });

  return res.concat(arr1.sort((a, b) => a - b));
};
