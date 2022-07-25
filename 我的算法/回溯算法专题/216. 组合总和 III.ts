function combinationSum3(k: number, n: number): number[][] {
    let result:number[][] = []
    function backtracking(k: number, sum: number, startIndex: number, tempArr: number[]) {
        if (sum > n) {
            return
        }
        if (tempArr.length === k&&sum===n) {
            result.push(tempArr.slice())
            return
        }
        for (let i = startIndex; i <= 9 - k + tempArr.length + 1; i++) {
            tempArr.push(i)
            backtracking(k, sum + i, i + 1, tempArr)
            tempArr.pop()
        }
    }
    backtracking(k, 0, 1, [])
    return result
};