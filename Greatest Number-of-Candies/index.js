var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= maxCandies);
  }
  return result;
};

const candies = [2, 3, 5, 1, 3, 11, 23, 9, 3, 8];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
