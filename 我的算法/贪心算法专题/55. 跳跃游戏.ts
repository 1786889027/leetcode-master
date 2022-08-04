function canJump(nums:number[]) {
    let farthestIndex: number = 0
    let curIndex:number = 0
    while (curIndex <= farthestIndex) {
        farthestIndex = Math.max(nums[curIndex] + curIndex, farthestIndex)
        if (farthestIndex >= nums.length - 1) {
            return true
        }
    }
    return false
}   