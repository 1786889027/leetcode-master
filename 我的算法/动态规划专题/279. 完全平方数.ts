function numSquares(n: number): number {
    const sum: number = Math.floor(Math.sqrt(n))
    const dp: number[] = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= sum; i++) {
        let tempVal: number = i * i
        for (let j = tempVal; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - tempVal] + 1)
        }
    }
    return dp[n]
};