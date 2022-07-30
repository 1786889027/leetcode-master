function subsets(nums: number[]): number[][] {
    const result: number[][] = []
    function backtacking(startIndex: number, tempArr: number[]) {
        result.push(tempArr.slice())
        for (let i = startIndex; i < nums.length; i++) {
            tempArr.push(nums[i])
            backtacking(i + 1, tempArr)
            tempArr.pop()
        }
    }
    backtacking(0, [])
    return result
};