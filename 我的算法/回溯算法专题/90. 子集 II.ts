function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const result: number[][] = []
    function backtacking(startIndex: number, tempArr: number[]) {
        result.push([...tempArr])
        if(startIndex>=nums.length) return
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue
            }
            tempArr.push(nums[i])
            backtacking(i + 1, tempArr)
            tempArr.pop()
        }
    }
    backtacking(0, [])
    return result
};