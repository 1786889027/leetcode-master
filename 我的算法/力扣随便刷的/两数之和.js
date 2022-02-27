var twoSum = function (nums, target) {
	const length = nums.length
	const m = new Map()
	const res = []
	for (let i = 0; i < length; i++) {
		let a = target - nums[i]
		if (m.has(a)) {
			res.push(m.get(a), i)
		}
		m.set(nums[i], i)
	}
	return res
}
//思路 利用map数据结构保存数据,防止重复遍历降低时间复杂度
