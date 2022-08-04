function largestSumAfterKNegations(nums: number[], k: number): number {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    let cur: number = 0
    while (cur < nums.length && k > 0) {
        if (nums[cur] < 0) {
            nums[cur] *= -1
            k--
        }
        cur++
    }
    while (k > 0) {
        nums[nums.length - 1] *= -1
        k--
    }
    return nums.reduce((pre, cur) => pre + cur, 0)
};