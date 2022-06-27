function findAnagrams(s: string, p: string): number[] {
    let sLen = s.length, pLen = p.length
    if (sLen < pLen) {
        return []
    }
    const ans:number[] = []
    const count = new Array(26).fill(0)
    for (let i = 0; i < pLen; i++) {
        ++count[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]
        --count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    let diff = 0
    for (let j = 0; j < 26; j++) {
        if (count[j] !== 0) {
            diff++
        }
    }
    if (diff === 0) {
        ans.push(0)
    }
    for (let i = 0; i < sLen - pLen; i++) {
        if (count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] == -1) {
            diff--
        } else if (count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] == 0) {
            diff++
        }
        ++count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];

        if (count[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)] == 1) {
            diff--
        } else if(count[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)] == 0) {
            diff++
        }
        --count[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)];

        if (diff == 0) {
            ans.push(i + 1)
        }
    }
    return ans
};
