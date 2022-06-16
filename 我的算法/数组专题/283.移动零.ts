function moveZeroes(nums: number[]): void {
    let slow: number = 0
    let fast: number = 0
    while (fast < nums.length) {
        if (nums[fast] !== 0) {
            let temp: number = nums[slow]
            nums[slow] = nums[fast]
            nums[fast] = temp
            slow ++ 
        }
        fast ++ 
    }
};