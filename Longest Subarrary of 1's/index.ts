function longestSubarray(nums: number[]): number {
    let left = 0; 
    let maxLen = 0; 
    let zeroCount = 0; 

    for (let right = 0; right < nums.length; right++) {
      
        if (nums[right] === 0) {
            zeroCount++;
        }
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen === nums.length ? maxLen - 1 : maxLen;
}