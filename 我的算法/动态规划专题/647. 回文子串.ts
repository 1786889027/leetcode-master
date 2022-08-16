function countSubstrings(s: string): number {
    const length: number = s.length
    const dp:boolean[][] = new Array(length).fill(0)
        .map(_ => new Array(length).fill(false));
    let resCount: number = 0
    for (let i = length - 1; i >= 0; i--) {
        for (let j = i; j < length; j++) {
            if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1] === true)) {
                dp[i][j] = true
                resCount++
            }
        }
    }
    return resCount
};  