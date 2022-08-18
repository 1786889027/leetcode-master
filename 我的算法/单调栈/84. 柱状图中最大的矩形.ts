function largestRectangleArea(heights: number[]): number {
    heights.unshift(0)
    heights.push(0)
    const length = heights.length
    const stack: number[] = []
    stack.push(0)
    let res:number = 0
    for (let i = 1; i < length; i++) {
        let top: number = stack[stack.length - 1]
        while (stack.length > 0 && heights[top] > heights[i]) {
            let mid: number = stack.pop() as number
            let left: number = stack.length > 0 ? stack[stack.length - 1] : -1;
            let w: number = i - left - 1
            let h: number = heights[mid]
            top = left
            res = Math.max(res, w * h)
        }
        stack.push(i)
    }
    return res
};