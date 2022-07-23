function removeDuplicates(s: string): string {
    let stack: string[] = []
    for (const char of s) {
        let top: string = stack[stack.length - 1]
        if (char === top) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join('')
};