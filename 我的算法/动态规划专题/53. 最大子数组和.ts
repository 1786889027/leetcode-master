function maxSubArray(nums: number[]): number {
    const length: number = nums.length
    const dp: number[] = new Array(length).fill(Number.MIN_SAFE_INTEGER)
    dp[0] = nums[0]
    let resMax:number = Number.MIN_SAFE_INTEGER
    for (let i = 1; i < length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        resMax = Math.max(dp[i], resMax)
    }
    return dp[length - 1]
};

