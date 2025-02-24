/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let countMap = new Map();
  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let occurrences = new Set(countMap.values());

  return occurrences.size === countMap.size;
};

console.log(uniqueOccurrences([1, 2, -1, -2]));
