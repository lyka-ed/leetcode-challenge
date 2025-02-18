/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      // Swap nums[read] and nums[write]
      [nums[read], nums[write]] = [nums[write], nums[read]];
      write++;
    }
  }
};

let nums = [0, 8, 0, 3, 11, 23, 8, 15, 0];
moveZeroes(nums);
console.log(nums);
