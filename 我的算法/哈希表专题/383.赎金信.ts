function canConstruct(ransomNote: string, magazine: string): boolean {
    const map:Map<string,number> = new Map()
    for (let i = 0; i < magazine.length; i++) {
        if (map.has(magazine[i])) {
            map.set(magazine[i], map.get(magazine[i]) as number + 1)
        } else {
            map.set(magazine[i],1)
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) as number - 1 < 0) {
            return false
        }
        map.set(ransomNote[i],map.get(ransomNote[i]) as number - 1)
    }
    return true
};