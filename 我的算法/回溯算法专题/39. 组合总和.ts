function combinationSum(candidates: number[], target: number): number[][] {
    let result:number[][] = []
    function backtracking(startIndex: number, sum: number,tempArr:number[]) {
        if (sum > target) {
            return
        }
        if (sum === target) {
            result.push(tempArr.slice())
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            tempArr.push(candidates[i])
            backtracking(i, sum + candidates[i], tempArr)
            tempArr.pop()
        }
    }
    backtracking(0, 0, [])
    return result
};