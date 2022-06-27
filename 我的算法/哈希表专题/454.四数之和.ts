function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const map = new Map()
    let resNum: number = 0
    let tempVal:number | undefined
    for (let i of nums1) {
        for (let j of nums2) {
            let tempVal = map.get(i + j)
            map.set(i + j, tempVal ? tempVal + 1 : 1)
        }
    }
    for (let k of nums3) {
        for (let l of nums4) {
            tempVal = map.get(0 - (k + l));
            if (tempVal) {
                resNum += tempVal;
            }
        }
    }
    return resNum
};