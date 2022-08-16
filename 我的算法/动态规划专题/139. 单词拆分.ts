function wordBreak(s: string, wordDict: string[]): boolean {
    const length: number = s.length
    const dp: boolean[] = new Array(length + 1).fill(false)
    dp[0] = true
    for (let i = 1; i <= length; i++) {
        for (let j = 0; j < i; j++) {
            const tempStr: string = s.slice(j, i)
            if (wordDict.includes(tempStr) && dp[j] == true) {
                dp[i] = true
                break
            }
        }
    }
    return dp[length]
};