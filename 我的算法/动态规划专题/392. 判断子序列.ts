function isSubsequence(s: string, t: string): boolean {
    const slen: number = s.length
    const tlen: number = t.length
    const dp: number[][] = new Array(tlen + 1).fill(0).map(_ => new Array(slen + 1).fill(0))
    for (let i = 1; i <= tlen; i++) {
        for (let j = 1; j <= slen; j++) {
            if (t[i - 1] === s[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] =dp[i - 1] [j]
            }
        }
    }
    return dp[tlen][slen] === slen
}