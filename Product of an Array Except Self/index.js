/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n);

  // Prefix pass
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  // Suffix pass
  let suffix = 1;
  for (let j = n - 1; j >= 0; j--) {
    answer[j] *= suffix; // Multiply stored prefix with suffix
    suffix *= nums[j];
  }

  return answer;
};
