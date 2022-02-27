var countoff = function (n, m) {
	if (n < 1 || m < 1) return
	let s = []
	for (let i = 1; i <= n; i++) {
		s.push(i)
	}
	let index = 0
	while (s.length > 1) {
		index = (index + m - 1) % s.length
		s.splice(index, 1)
	}
	return s[0]
}
