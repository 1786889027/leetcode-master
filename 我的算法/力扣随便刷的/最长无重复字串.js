var lengthOfLongestSubstring = function (s) {
	const n = s.length
	const set = new Set()
	let r = 0
	let res = 0
	for (let i = 0; i < n; i++) {
		if (i > 0) {
			set.delete(s.charAt(i - 1)) //左指针+1即窗口删除第一个数据
		}
		while (r < n && !set.has(s.charAt(r))) {
			set.add(s.charAt(r))
			r++
		}
		res = Math.max(res, r - i)
	}
	return res
}
/*滑动窗口方法,一个i左指针,一个r右指针,左指针固定时,右指针向又滑动,遇到相同的字符即停止,停止后测量窗口的长度
即r-i的长度,并与结果res比较取大的那个作为最终结果,然后i+1,窗口左指针+1(左指针+1即窗口删除第一个数据),重复以上操作
就能找到最长的无重复子串*/
