function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map()
    const ans:number[] = []
    for (let i = 0; i < nums1.length;i++) {
        if (map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1)
        } else {
            map.set(nums1[i],1)
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (map.has(nums2[j])) {
            ans.push(nums2[j])
            map.set(nums2[j], map.get(nums2[j]) - 1)
            if (map.get(nums2[j]) == 0) {
                map.delete(nums2[j])
            }
        }
    }
    return ans
};