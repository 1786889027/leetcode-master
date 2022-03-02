function searchInsert(nums: number[], target: number): number {
	let left: number = 0
	let right: number = nums.length - 1
	while (left <= right) {
		const mid: number = Math.floor((left + right) >> 1)
		if (target < nums[mid]) {
			right = mid - 1
		} else if (target > nums[mid]) {
			left = mid + 1
		} else {
			return mid
		}
	}
	return right + 1
}
console.log(searchInsert([1,3,5,6], 5))
