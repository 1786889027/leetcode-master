function combinationSum4(nums: number[], target: number): number {
    const length: number = nums.length
    const dp: number[] = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < length; j++) {
            if (i - nums[j] >= 0) {
                dp[i] += dp[i - nums[j]]
            }
        }
    }
    return dp[target]
};