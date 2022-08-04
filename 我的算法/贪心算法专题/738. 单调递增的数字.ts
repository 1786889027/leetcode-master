function monotoneIncreasingDigits(n: number): number {
    let strArr: number[] = String(n).split('').map(i => parseInt(i));
    const length = strArr.length;
    let flag: number = length;
    for (let i = length - 2; i >= 0; i--) {
        if (strArr[i] > strArr[i + 1]) {
            strArr[i] -= 1;
            flag = i + 1;
        }
    }
    for (let i = flag; i < length; i++) {
        strArr[i] = 9;
    }
    return parseInt(strArr.join(''));
};