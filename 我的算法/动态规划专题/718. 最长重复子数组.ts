function findLength(nums1: number[], nums2: number[]): number {
    const len1: number = nums1.length
    const len2: number = nums2.length
    const dp: number[][] = new Array(len1 + 1).fill(0).map(_ => new Array(len2 + 1).fill(0))
    let resMax:number = 0
    for (let i = 1; i <= len1; i++) {
        for (let j = 1 ; j <= len2; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                resMax = Math.max(resMax, dp[i][j])
            } 
        }
    }
    return resMax
};