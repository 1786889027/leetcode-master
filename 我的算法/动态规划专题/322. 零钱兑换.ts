function coinChange(coins: number[], amount: number): number {
    const length: number = coins.length
    const dp: number[] = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            if (dp[j - coins[i]] == Infinity) continue
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};