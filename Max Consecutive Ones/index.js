/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0,
    zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    if (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
  }

  return nums.length - left;
};

console.log(longestOnes([1, 0, 1, 1, 0, 1, 1], 5));
