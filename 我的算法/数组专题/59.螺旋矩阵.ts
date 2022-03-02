function generateMatrix(n: number): number[][] {
    let sum: number = 0
    let loop: number = ~~(n/2)
    let resArr: number[][] = new Array(n).fill(1).map(i => new Array(n))
    let chunkNum = n-1
    let startX = 0
    let startY = 0
    let value:number = 1
    while (loop > 0) {
        let x = startX
        let y = startY
        while (x < startX + chunkNum) {
            resArr[y][x] = value
            value++
            x++
        }
        while (y < startX + chunkNum) {
            resArr[y][x] = value
            value++
            y++
        }
        while (x > startX) {
            resArr[y][x] = value
            value++
            x--
        }
        while (y > startY) {
            resArr[y][x] = value
            value++
            y--
        }
        startX++
        startY++
        chunkNum -= 2
        loop--
    }
    if (n % 2 === 1) {
        resArr[startX][startY] = value 
    }
    return resArr
};
console.log(generateMatrix(4));
