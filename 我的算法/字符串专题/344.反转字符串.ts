function reverseString(s: string[]): void {
    let len = s.length
    let left: number = 0
    let right: number = len - 1
    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
};