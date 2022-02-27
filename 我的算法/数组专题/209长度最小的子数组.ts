function minSubArrayLen(target: number, nums: number[]): number {
	let res: number = Number.MAX_SAFE_INTEGER
	let left: number = 0
	let sum: number = 0
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		while (sum >= target) {
			res = res >= i - left + 1 ? i - left + 1 : res
			sum -= nums[left]
			left++
		}
	}
	return (res = res === Number.MAX_SAFE_INTEGER ? 0 : res)
}
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
