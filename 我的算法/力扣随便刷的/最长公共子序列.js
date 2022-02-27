var longestCommonSubsequence = function (text1, text2) {
	const m = text1.length
	const n = text2.length
	let dp = []
	//制表
	for (let i = 0; i <= m; i++) {
		dp[i] = []
		for (let j = 0; j <= n; j++) {
			dp[i][j] = 0
		}
	}
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else if (dp[i - 1][j] >= dp[i][j - 1]) {
				dp[i][j] = dp[i - 1][j]
			} else {
				dp[i][j] = dp[i][j - 1]
			}
		}
	}
	return dp[m][n]
}
console.log(longestCommonSubsequence('a', 'a'))
