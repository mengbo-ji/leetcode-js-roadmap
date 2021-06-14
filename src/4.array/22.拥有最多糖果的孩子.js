/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map(v => {
    if (v + extraCandies >= max) {
      return true;
    }
    return false;

  });
};
