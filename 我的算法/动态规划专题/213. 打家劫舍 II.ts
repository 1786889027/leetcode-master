function rob(nums: number[]): number {
    const length = nums.length
    if (length === 1) {
        return nums[0]
    }
    return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1))
};

function robRange(nums: number[], start: number, end: number): number {
    if (start === end) return nums[start];
    const dp: number[] = [];
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[end];
}