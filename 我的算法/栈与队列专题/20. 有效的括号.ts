function isValid(s: string): boolean {
    type BracketMap = {
        [index: string]: string;
    }
    let stack: string[] = []
    let bracketMap: BracketMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    } 
    for (const i of s) {
        if (bracketMap.hasOwnProperty(i)) {
           stack.push(bracketMap[i])
        } else if (i !== stack.pop()) {
            return false
       }
    }
    return stack.length === 0
};