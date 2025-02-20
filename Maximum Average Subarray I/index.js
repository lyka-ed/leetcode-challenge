/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    
    // Compute sum of first 'k' elements
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
};


console.log(findMaxAverage([5,11, 8, 9, 23, 15, 5], 2));s