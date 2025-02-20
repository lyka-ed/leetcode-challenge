function findMaxAverage(nums: number[], k: number): number {
    let x = 0;
    for (let i = 0; i < k; i++) {
        x += nums[i];
    }

    let maxSum = x;

    for (let i = k; i < nums.length; i++) {
        x += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, x);
    }

    return maxSum / k;
}