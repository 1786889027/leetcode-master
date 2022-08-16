function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m: number = obstacleGrid.length
    const n:number = obstacleGrid[0].length
    let dp: number[][] = new Array(m).fill(0).map(_ => new Array(n).fill(0));
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1;
    }
    for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    return dp[m - 1][n - 1]
};