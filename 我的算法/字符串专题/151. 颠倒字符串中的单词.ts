function reverseWords(s: string): string {
    s = s.trim().replace(/\s+/g, ' ')
    let strArr: string[] = s.split(' ')
    let left: number = 0
    let right: number = strArr.length - 1
    while (left < right) {
        let tempStr = strArr[right]
        strArr[right] = strArr[left]
        strArr[left] = tempStr
        left++
        right--
    }
    return strArr.join(' ')
}; 