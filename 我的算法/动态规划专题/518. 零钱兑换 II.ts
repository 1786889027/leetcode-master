function change(amount: number, coins: number[]): number {
    const length: number = coins.length
    let dp: number[] = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j-coins[i]]
        }
    }
    return dp[amount]
};