type BinaryInfo = { numOfZero: number, numOfOne: number }

function findMaxForm(strs: string[], m: number, n: number): number {
    const length: number = strs.length
    const dp: number[][] = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
    for (let i = 0; i < length; i++) {
        const { numOfZero, numOfOne } = countBinary(strs[i])
        for (let j = m; j >= numOfZero; j--) {
            for (let k = n; k >= numOfOne; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - numOfZero][k - numOfOne] + 1)
            }
        }
    }
    return dp[m][n]
};

function countBinary(s: string): BinaryInfo{
    let numOfZero: number = 0,
        numOfOne: number = 0
    for (let c of s) {
        if (c === '0') {
            numOfZero++
        } else {
            numOfOne++
        }
    }
    return { numOfZero, numOfOne }
}