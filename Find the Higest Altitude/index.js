/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let maxAltitude = 0;
  let currentAltitude = 0;

  for (const g of gain) {
    currentAltitude += g;
    maxAltitude = Math.max(maxAltitude, currentAltitude);
  }

  return maxAltitude;
};

console.log(largestAltitude([1, 2, 3, 4, 5]));
