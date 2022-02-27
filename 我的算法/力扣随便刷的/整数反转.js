//转成字符串再转回来 效率低下
// var reverse = function (x) {
// 	let s = x.toString()
// 	let n = s.length
// 	let str = ''
// 	for (let i = n; i >= 0; i--) {
// 		str = str + s.charAt(i)
// 	}
// 	if (Number.parseInt(str) > Math.pow(2, 31) - 1) return 0
// 	else if (x >= 0) return str
// 	else return -Number.parseInt(str)
// }
//利用栈思想
var reverse = function (x) {
	let rev = 0
	while (x !== 0) {
		const dight = x % 10
		x = ~~(x / 10) //~~符号等同于Math.floor()
		rev = rev * 10 + dight
		if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) return 0
	}
	return rev
}
console.log(reverse(132))
