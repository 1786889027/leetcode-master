function longestCommonSubsequence(text1: string, text2: string): number {
    const len1: number = text1.length
    const len2: number = text2.length
    const dp: number[][] = new Array(len1 + 1).fill(0).map(_ => new Array(len2 + 1).fill(0))
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[len1][len2]
};