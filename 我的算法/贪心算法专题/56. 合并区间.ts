function merge(intervals: number[][]): number[][] {
    const length: number = intervals.length
    if (length == 1) return intervals
    intervals.sort((a, b) => a[0] - b[0])
    let start:number = intervals[0][0]
    let end: number = intervals[0][1]
    let tempInterval: number[]
    let resArr:number[][] = []
    for (let i = 1; i < length; i++) {
        tempInterval = intervals[i]
        if (tempInterval[0] <= end) {
            end = Math.max(end, tempInterval[1])
        } else {
            resArr.push([start,end])
            start = tempInterval[0]
            end = tempInterval[1]
        }
    }
    resArr.push([start,end])
    return resArr
};