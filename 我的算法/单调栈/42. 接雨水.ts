function trap(height: number[]): number {
    const length: number = height.length;
    const stack: number[] = [];
    stack.push(0);
    let resVal: number = 0;
    for (let i = 1; i < length; i++) {
        let top = stack[stack.length - 1];
        if (height[top] > height[i]) {
            stack.push(i);
        } else if (height[top] === height[i]) {
            stack.pop();
            stack.push(i);
        } else {
            while (stack.length > 0 && height[top] < height[i]) {
                let mid = stack.pop() as number;
                if (stack.length > 0) {
                    let left = stack[stack.length - 1];
                    let h = Math.min(height[left], height[i]) - height[mid];
                    let w = i - left - 1;
                    resVal += h * w;
                    top = stack[stack.length - 1];
                }
            }
            stack.push(i);
        }
    }
    return resVal;
};