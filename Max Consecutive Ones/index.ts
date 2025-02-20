function longestOnes(nums: number[], k: number): number {
    let left: number = 0, zeroCount: number = 0;
    
    for (let right: number = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++;

        if (zeroCount > k) {
            if (nums[left] === 0) zeroCount--;
            left++;
        }
    }
    
    return nums.length - left;
}