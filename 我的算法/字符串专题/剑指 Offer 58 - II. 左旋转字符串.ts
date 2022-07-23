function reverseLeftWords(s: string, n: number): string {
    let strArr: string[] = s.split('')
    let subStr:string = ''
    for (let i = 0; i < n; i++) {
        subStr += strArr[i]
    }
    strArr.splice(0, n)
    return strArr.join('')+subStr
};