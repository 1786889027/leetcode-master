function maxProfit(k: number, prices: number[]): number {
    const length: number = prices.length
    if(length==0) return 0
    const dp: number[][] = new Array(length).fill(0).map(_ => new Array(2 * k + 1).fill(0))
    for (let i = 1; i <= k; i++) {
        dp[0][i * 2 - 1] = -prices[0];
    }
    for (let i = 1; i < length; i++) {
        for (let j = 1; j <= 2 * k; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + Math.pow(-1, j) * prices[i]);
        }
    }
    return dp[length - 1][2 * k]
};