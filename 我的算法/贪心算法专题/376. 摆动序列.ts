function wiggleMaxLength(nums: number[]): number {
    const length: number = nums.length
    if (length < 1) {
        return length
    }
    let prediff: number = 0
    let curdiff: number = 0
    let count: number = 1
    for (let i = 1; i < length; i++) {
        curdiff = nums[i] - nums[i-1]
        if ((prediff <= 0 && curdiff > 0) || (prediff >= 0 && curdiff < 0)) {
            prediff = curdiff
            count++
        }
    }
    return count
};