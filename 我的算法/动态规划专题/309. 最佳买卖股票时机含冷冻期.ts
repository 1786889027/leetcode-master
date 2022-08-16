function maxProfit(prices: number[]): number {
    /**
        dp[i][0]: 持股状态；
        dp[i][1]: 无股状态，当天为非冷冻期；
        dp[i][2]: 无股状态，当天卖出；
        dp[i][3]: 无股状态，当天为冷冻期；
     */
    const length: number = prices.length;
    const dp: number[][] = new Array(length).fill(0).map(_ => []);
    dp[0][0] = -prices[0]
    dp[0][1] = dp[0][2] = dp[0][3] = 0
    for (let i = 0; i < length; i++) {
        dp[i][0] = Math.max(
            dp[i - 1][0],
            Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i]
        )
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])
        dp[i][2] = dp[i - 1][0] + prices[i]
        dp[i][3] = dp[i - 1][2]
    }
    const lastEl: number[] = dp[length - 1]
    return Math.max(...lastEl)
};