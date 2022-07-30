function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const result:number[][] = []
    function backtracking(startIndex:number,sum:number,tempArr:number[]): void{
        if (sum > target) {
            return
        }
        if (sum === target) {
            result.push(tempArr.slice())
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }
            tempArr.push(candidates[i]);
            backtracking(i + 1, sum + candidates[i], tempArr)
            tempArr.pop()
        }
    }
    backtracking(0, 0, [])
    return result
};