function mySqrt(x: number): number {
	if (x === 0) {
		return 0
	}
	let left = 1
	let right = x
	while (left <= right) {
		const mid = left + ~~((right - left) >> 1)
		if (mid * mid < x) {
			left = mid + 1
		} else if (mid * mid > x) {
			right = mid - 1
		} else {
			return mid
		}
    }
    return right 
}
