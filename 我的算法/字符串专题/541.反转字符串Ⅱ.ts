function reverseStr(s: string, k: number): string {
    let strArr = s.split('')
    let left: number = 0
    let right: number = k - 1
    let i:number = 0
    for (; i < strArr.length; i += k * 2) {
        let resLen:number = strArr.length - i
        left = i
        if (resLen < k) {
            right = strArr.length - 1
        } else {
            right = i + k - 1
        }        
        while (left < right) {
            let tempStr:string = strArr[left]
            strArr[left] = s[right]
            strArr[right] = tempStr
            left++
            right--
        }
    }
    return strArr.join('')
};
console.log(reverseStr("abcdefg",2));
