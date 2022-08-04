function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0])
    let res: number = 0
    let endRight: number = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        const tempIntervals = intervals[i]
        if (tempIntervals[0] >= endRight) {
            endRight = tempIntervals[1]
        } else {
            res++
            endRight = Math.min(tempIntervals[1],endRight)
        }
    }
    return res
};