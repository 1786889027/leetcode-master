function dailyTemperatures(temperatures: number[]): number[] {
    const length: number = temperatures.length;
    const stack: number[] = [];
    const resArr: number[] = new Array(length).fill(0);
    stack.push(0);
    for (let i = 1; i < length; i++) {
        let top = stack[stack.length - 1];
        while (
            stack.length > 0 &&
            temperatures[top] < temperatures[i]
        ) {
            resArr[top] = i - top;
            stack.pop();
            top = stack[stack.length - 1];
            
        }
        stack.push(i);
    }
    return resArr;
};