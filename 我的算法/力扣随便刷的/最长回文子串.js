var longestPalindrome = function (s) {
	const n = s.length
	let res = 0
	let str = ''
	if (n === 1) {
		return s
	}
	let i = 0
	while (i < n - 1) {
		let l = i - 1,
			r = i + 1
		while (s.charAt(r) === s.charAt(i)) {
			r++
		}
		while (l >= 0 && r < n && s.charAt(l) === s.charAt(r)) {
			l--
			r++
		}
		str = r - l - 1 > res ? s.substr(l + 1, r - l - 1) : str
		res = Math.max(res, r - l - 1)
		i++
	}
	return str
}
console.log(longestPalindrome('ac'))
