function jump(nums: number[]): number {
    let nextFarthestIndex: number = 0;
    let curFarthestIndex: number = 0
    let curIndex: number = 0
    let stepNum:number = 0
    while (curIndex < length - 1) {
        nextFarthestIndex = Math.max(nextFarthestIndex, curIndex + nums[curIndex])
        if (curIndex == curFarthestIndex) {
            stepNum++
            curFarthestIndex = nextFarthestIndex
        }
        curIndex++
    }
    return stepNum
};