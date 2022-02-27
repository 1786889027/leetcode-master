//这是解法1 最容易想到的暴力合并排序找中位数
var findMedianSortedArrays = function (nums1, nums2) {
	var nums = nums1.concat(nums2)
	nums.sort((a, b) => a - b)
	var res = 0
	if (nums.length % 2 == 0) {
		var a = nums.length / 2
		var b = nums.length / 2 - 1
		res = (nums[a] + nums[b]) / 2
	} else {
		res = nums[Math.floor(nums.length / 2)]
	}
	return res
}
// 解法2 划分法 中位数的作用就是划分
var findMedianSortedArrays2 = function (nums1, nums2) {
	const n = nums1.length + nums2.length
	const mid = Math.round(n / 2) - 1
	let res = 0
	if (nums1.length > nums2.length) {
		var temp = nums1
		nums1 = nums2
		nums2 = temp
	}
	if (nums1.length === 0) {
		if (n % 2 === 0) {
			res = (nums2[mid] + nums2[mid + 1]) / 2
		} else {
			res = nums2[mid]
		}
		return res
	}
	let left = 0,
		right = mid - left
	while (nums1[left + 1] < nums2[right - 1]) {
		left++
		right--
	}
	if (nums1[left] > nums2[right]) {
		if (n % 2 === 0) {
			let min = Math.min(
				nums1[left],
				nums2[right + 1] ? nums2[right + 1] : nums1[left]
			)
			res = (min + nums2[right]) / 2
		} else {
			res = nums2[right]
		}
		return res
	}
	if (n % 2 === 0) {
		let min = Math.min(
			nums1[left + 1] ? nums1[left + 1] : nums2[right],
			nums2[right]
		)
		let max = Math.max(
			nums1[left],
			nums2[right - 1] ? nums2[right - 1] : nums1[left]
		)
		res = (max + min) / 2
	} else {
		res = Math.max(
			nums1[left],
			nums2[right - 1] ? nums2[right - 1] : nums2[right]
		)
	}
	return res
}
