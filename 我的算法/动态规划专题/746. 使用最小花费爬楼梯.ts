function minCostClimbingStairs(cost: number[]): number {
    const length: number = cost.length
    let dp: number[] = []
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i <= length; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    }
    return Math.min(dp[length - 1], dp[length - 2]);
};