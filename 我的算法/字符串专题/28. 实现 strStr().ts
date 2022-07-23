function strStr(haystack: string, needle: string): number {
    let len1: number = haystack.length, len2: number = needle.length
    if (needle === '') {
        return 0
    }
    let left: number = 0
    while (left <= (len1 - len2)) {
        let str = haystack.substring(left, left + len2)
        if (str === needle) {
            return left
        }
        left++
    }
    return -1
};

function strKMP(haystack: string, needle: string):number {
    function getNext(needle: string): number[] {
        let next: number[] = []
        let j: number = -1
        next[0] = -1
        for (let i = 1, length = needle.length; i < length; i++) {
            while (j >= 0 && needle[i] !== needle[j + 1]) {
                j = next[j]
            }
            if (needle[i] === needle[j + 1]) {
                j++
            }
            next[i] = j
        }
        return next
    }
    if (needle.length == 0) return 0
    let next: number[] = getNext(needle)
    let j: number = -1
    for (let i = 0, length = haystack.length; i < length; i++) {
        while (j >= 0 && haystack[i] !== needle[j + 1]) {
            j = next[j]
        }
        if (haystack[i] === needle[j + 1]) {
            if (j === needle.length - 2) {
                return i - j - 1
            }
            j++
        }
    }
    return -1
}
