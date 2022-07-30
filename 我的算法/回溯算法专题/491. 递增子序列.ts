function findSubsequences(nums: number[]): number[][] {
    const result: number[][] = []
    function backtacking(startIndex: number, tempArr: number[]) {
        if (tempArr.length >= 2) {
            result.push([...tempArr])
        }
        const usedSet:Set<number> = new Set()
        for (let i = startIndex; i < nums.length; i++) {
            if (nums[i] < tempArr[tempArr.length-1] || usedSet.has(nums[i])) {
                continue
            }
            usedSet.add(nums[i])
            tempArr.push(nums[i])
            backtacking(i + 1, tempArr)
            tempArr.pop()
        }
    }
    backtacking(0, [])
    return result
};