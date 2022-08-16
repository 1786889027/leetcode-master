function findTargetSumWays(nums: number[], target: number): number {
    const length = nums.length
    const sum: number = nums.reduce((pre, cur) => pre + cur)
    if ((sum + target) % 2 != 0 || (Math.abs(target) > sum)) {
        return 0
    }
    const left: number = (sum + target) / 2
    
    const dp: number[] = new Array(left + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < length; i++) {
        for (let j = left; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[left]
};