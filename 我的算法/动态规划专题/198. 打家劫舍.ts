function rob(nums: number[]): number {
    const length = nums.length
    if (length === 1) {
        return nums[0]
    }
    const dp: number[] = new Array(length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[length - 1]
};