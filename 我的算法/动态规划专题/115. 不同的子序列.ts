function numDistinct(s: string, t: string): number {
    const slen: number = s.length
    const tlen: number = t.length
    const dp: number[][] = new Array(slen + 1).fill(0).map(_ => new Array(tlen + 1).fill(0))
    dp[0][0] = 1
    for (let i = 1; i <= slen; i++) {
        dp[i][0] = 1
    }
    for (let j = 1; j <= tlen; j++) {
        dp[0][j] = 0
    }
    for (let i = 1; i <= slen; i++) {
        for (let j = 1; j <= tlen; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[slen][tlen];
};