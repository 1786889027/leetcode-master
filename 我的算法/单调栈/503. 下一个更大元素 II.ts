function nextGreaterElements(nums: number[]): number[] {
    const length = nums.length
    const stack: number[] = []
    const resArr: number[] = new Array(length).fill(-1)
    stack.push(0)
    for (let i = 1; i < length * 2; i++) {
        const index = i % length;
        let top: number = stack[stack.length - 1]
        while (stack.length > 0 && nums[top] < nums[index]) {
            resArr[top] = nums[i]
            stack.pop()
            top = stack[stack.length - 1]
        }
        if (i < length) {
            stack.push(i)
        }
    }
};