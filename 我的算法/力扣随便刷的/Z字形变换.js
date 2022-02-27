var convert = function (s, numRows) {
	const n = s.length
	let str = ''
	if (numRows === 1) return s
	for (let i = 0; i < numRows; i++) {
		for (let j = i; j < n + i * 2; j = j + numRows + numRows - 2) {
			if (i !== 0 && i !== numRows - 1) {
				str = str.concat(s.charAt(j - 2 * i), s.charAt(j))
			} else {
				str = str.concat(s.charAt(j))
			}
		}
	}
	return str
}
console.log(convert('ABCDEF', 5))
