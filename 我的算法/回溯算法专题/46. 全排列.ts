function permute(nums: number[]): number[][] {
    const result: number[][] = []
    const used:number[] = [] 
    const backtacking = (tempArr: number[]): void => {
        if (tempArr.length === nums.length) {
            result.push([...tempArr])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue
            }
            tempArr.push(nums[i])
            used[i] = 1
            backtacking(tempArr)
            used[i] = 0
            tempArr.pop()
        }
    }
    backtacking([])
    return result
};