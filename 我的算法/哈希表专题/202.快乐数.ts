function isHappy(n: number): boolean {
    const set = new Set()
    while (1) {
        let sum = getSum(n)
        if (sum == 1) {
            return true
        }
        if (set.has(sum)) {
            return false
        } else {
            set.add(sum)
        }
        n = sum
    }
};
function getSum(n:number): number {
    return String(n).split("").reduce((pre, cur) => (pre + Number(cur) * Number(cur)), 0)
}