function partition(s: string): string[][] {
    const result: string[][] = []
    const path: string[] = []
    function isHuiWen(str:string,startIndex:number,endIndex:number):boolean {
        while (startIndex < endIndex) {
            if (str[startIndex] !== str[endIndex]) {
                return false
            }
            startIndex++
            endIndex--
        }
        return true
    }
    function backtacking(startIndex: number, str: string) {
        if (startIndex >= str.length) {
            result.push([...path])
            return
        }
        for (let i = startIndex; i < str.length; i++) {
            if (!isHuiWen(str, startIndex, i)) {
                continue
            }
            path.push(str.substring(startIndex, i + 1))
            backtacking(i + 1, str)
            path.pop()
        }
    }
    backtacking(0, s)
    return result
};