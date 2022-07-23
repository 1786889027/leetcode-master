function evalRPN(tokens: string[]): number {
    let stack: number[] = []
    let operatorMap: Map<string, (a: number, b: number) => number> = new Map([
        ['+', (a, b) => a + b],
        ['-', (a, b) => a - b],
        ['*', (a, b) => a * b],
        ['/', (a, b) => Math.trunc(a / b)]
    ])
    let a: number, b: number
    for (let token of tokens) {
        if (operatorMap.has(token)) {
            b = stack.pop()!
            a = stack.pop()!
            stack.push(operatorMap.get(token)!(a, b))
        } else {
            stack.push(Number(token))
        }
    }
    return stack.pop()!
};