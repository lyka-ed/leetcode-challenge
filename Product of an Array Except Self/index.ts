function productExceptSelf(nums: number[]): number[] {
    let answer: number[] = [];
    
    // Prefix pass
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix; 
        prefix *= nums[i];  
    }
    // Suffix pass
    let suffix = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        answer[j] *= suffix; 
        suffix *= nums[j];   
    }
    
    return answer;
}