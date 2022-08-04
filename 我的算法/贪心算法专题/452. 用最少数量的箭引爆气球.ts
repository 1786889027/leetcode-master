function findMinArrowShots(points: number[][]): number {
    const length = points.length
    if (length == 0) {
        return 0
    }
    points.sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })
    let res:number = 1
    let endX: number = points[0][1]
    let tempPoint: number[]
    for (let i = 1; i < length; i++) {
        tempPoint = points[i];
        if (tempPoint[0] > endX) {
            res++;
            endX = tempPoint[1];
        } else {
            endX = Math.min(endX, tempPoint[1]);
        }
    }
    return res
};
