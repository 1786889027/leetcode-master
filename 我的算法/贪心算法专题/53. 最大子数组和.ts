function maxSubArray(nums: number[]): number {
    let len: number = nums.length
    let curSum: number = 0
    let ansMax:number = -Infinity
    for (let i = 0; i < len; i++) {
        curSum += nums[i]
        ansMax = Math.max(curSum, ansMax)
        if (curSum < 0) {
            curSum = 0
        }
    }
    return ansMax
};