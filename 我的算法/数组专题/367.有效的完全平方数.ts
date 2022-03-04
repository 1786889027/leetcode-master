function isPerfectSquare(num: number): boolean {
    let left = 1
	let right = num
	while (left <= right) {
		const mid = left + ~~((right - left) >> 1)
		if (mid * mid < num) {
			left = mid + 1
		} else if (mid * mid > num) {
			right = mid - 1
		} else {
			return true
		}
    }
    return false
};
console.log(isPerfectSquare(1));
