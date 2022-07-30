function permuteUnique(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const result: number[][] = []
    const usedArr:boolean[] = new Array(nums.length).fill(false)
    const backtacking = (tempArr:number[]): void => {
        if (tempArr.length === nums.length) {
            result.push([...tempArr])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !usedArr[i-1]) {
                continue
            }
            if (!usedArr[i]) {
                tempArr.push(nums[i])
                usedArr[i] = true
                backtacking(tempArr)
                usedArr[i] = false
                tempArr.pop()
            }
        }
    }
    backtacking([])
    return result
};