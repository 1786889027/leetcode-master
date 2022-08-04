function partitionLabels(s: string): number[] {
    let start:number = 0
    let right: number = s.lastIndexOf(s[0])
    let resArr: number[] = []
    for (let i = 0; i < s.length; i++) {
        let strIndnex: number = s.lastIndexOf(s[i])
        right = Math.max(strIndnex, right)
        if (i == right) {
            resArr.push(right - start + 1)
            start = right + 1
        }
    }
    return resArr
};