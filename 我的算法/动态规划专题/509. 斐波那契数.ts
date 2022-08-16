function fib(n: number): number {
    if (n == 0 || n == 1) {
        return n
    }
    let dp: number[] = []
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] 
    }
    return dp[n]
};