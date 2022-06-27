function groupAnagrams(strs: string[]): string[][] {
    let res:string[][] = []
    let isGrouped = new Set()
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i]
        if (isGrouped.has(str)) {
            continue
        }
        isGrouped.add(str)
        let group: string[] = []
        group.push(str)
        for (let k = i + 1; k < strs.length; k++) {
            if (isAnagram(str, strs[k])) {
                group.push(strs[k])
                isGrouped.add(strs[k])
            }
        }
        res.push(group)
    }
    return res
};

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i],1)
        }
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1)
        } else {
            map.set(t[i], -1)
        }
    }
    for (const iterator of map.values()) {
        if (iterator !== 0) {
            return false
        }
    }
    return true
};