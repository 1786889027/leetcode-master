function restoreIpAddresses(s: string): string[] {
    let result: string[] = []
    function isValidIpSegment(str: string): boolean{
        let resBool: boolean = true
        let tempVal: number = Number(str)
        if (str.length === 0 || isNaN(tempVal) || tempVal > 255 || tempVal < 0 || (str.length > 1 && str[0] === '0')) {
            resBool = false
        }
        return resBool
    }
    function backtacking(str:string,startIndex:number,route:string[]):void {
        let length: number = str.length
        if (route.length === 4 && startIndex >= length) {
            result.push(route.join('.'))
            return
        }
        if (route.length === 4 || startIndex >= length) return;
        let tempStr: string = '';
        for (let i = startIndex + 1; i <= Math.min(length, startIndex + 3); i++) {
            tempStr = s.slice(startIndex,i)
            if (isValidIpSegment(tempStr)) {
                route.push(tempStr)
                backtacking(str, i, route)
                route.pop()
            }
        }
    }
    backtacking(s, 0, [])
    return result
};