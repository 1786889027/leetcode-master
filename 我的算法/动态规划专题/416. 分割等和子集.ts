function canPartition(nums: number[]): boolean {
    let sum: number = nums.reduce((pre, cur) => pre + cur)
    if (sum % 2 != 0) {
        return false
    }
    const size: number = sum / 2
    const length = nums.length
    const dp: number[] = new Array(length + 1).fill(0)
    for (let i = 0; i < length; i++) {
        for (let j = size; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
        }
    }
    return dp[size] === size
};