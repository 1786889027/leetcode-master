var generateParenthesis = function (n) {
	let str = ''
	const res = []
	let left = n,
		right = n
	back(left, right, str, res)
	return res
}
function back(left, right, str, res) {
	if (left == 0 && right == 0) {
		res.push(str)
		return res
	}
	if (left > 0) {
		str = str + '('
		back(left - 1, right, str, res)
		str = str.slice(0, str.length - 1)
	}
	if (left < right) {
		str = str + ')'
		back(left, right - 1, str, res)
		str = str.slice(0, str.length - 1)
	}
}
//回溯法  开始前面只能放'(',设置可以摆放的'('和')'的个数 然后开始回溯,记住每次递归前要重置一下str 不然就不叫回溯了
console.log(generateParenthesis(4))
