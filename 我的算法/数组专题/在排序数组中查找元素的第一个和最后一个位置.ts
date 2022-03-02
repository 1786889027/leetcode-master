function searchRange(nums: number[], target: number): any {
	let length = nums.length
	let left = 0
	let right = length - 1
	if (nums[left] > target || nums[right] < target) {
		return [-1, -1]
	}
	while (left <= right) {
		const mid = left + ~~((right - left) / 2)
		if (target > nums[mid]) {
			left = mid + 1
		} else if (target < nums[mid]) {
			right = mid - 1
		} else {
			left = mid - 1
			right = mid + 1
			while (nums[left] === target || nums[right] === target) {
				if (nums[left] === target) {
					left--
				}
				if (nums[right] === target) {
					right++
				}
			}
			return [left + 1, right - 1]
		}
	}
	return [-1, -1]
}
console.log(searchRange([], 0))
