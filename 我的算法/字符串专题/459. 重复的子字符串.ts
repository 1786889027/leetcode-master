function repeatedSubstringPattern(s: string): boolean {
    let length: number = s.length
    if (length == 0) {
        return false
    }
    let next:number[] = []
    let j: number = -1
    next[0] = j
    for (let i = 1; i < length; i++) {
        while (j >= 0 && s[i] !== s[j + 1]) {
            j = next[j]
        }
        if (s[i] === s[j + 1]) {
            j++
        }
        next[i] = j
    }
    let nextLen = next.length
    let suffixLength: number = next[nextLen - 1] + 1;
    if (next[nextLen - 1] != -1 && length % (length - suffixLength) == 0) {
        return true
    }
    return false
};