function findLengthOfLCIS(nums: number[]): number {
    const length: number = nums.length
    const dp: number[] = new Array(length).fill(1)
    let resMax:number = 0
    for (let i = 1; i < length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1
        }
        resMax = Math.max(resMax,dp[i])
    }
    return resMax
};