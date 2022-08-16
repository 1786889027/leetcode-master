function lengthOfLIS(nums: number[]): number {
    const length: number = nums.length
    const dp: number[] = []
    dp[0] = 1
    for (let i = 1; i < length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return dp[length-1]
};